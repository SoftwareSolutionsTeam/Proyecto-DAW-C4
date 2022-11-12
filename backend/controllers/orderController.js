const Order=require("../models/order");
const Product= require("../models/productos")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const productos = require("../models/productos");

//Crear una nueva orden
exports.newOrder= catchAsyncErrors (async (req, res)=>{
    const {
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;
        console.log("items dentro de newOrder",items.cantidad)

    const order= await Order.create({
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        fechaPago: Date.now(),
        user: req.user._id
    })

   
        // const producto = await productos.findById(items.Product);
        //     console.log("producto antes ", producto)
        
        
        producto.inventario = producto.inventario - items.cantidad;
        console.log("producto despues ",producto)

        const { id  } = producto

        const inventario = producto.inventario - items.cantidad

        await productos

            .updateOne({ _id: id },{$set: {inventario}})

            .then((data) => res.json(data))

            .catch((error) => res.json({ message: error }))
    
        await producto.save({validateBeforeSave: false})
        

    res.status(201).json({
        success:true,
        order
    })

    


    console.log()
})

//Ver una orden
exports.getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id).populate("user", "nombre email") //restriccion de usuario

    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese Id",404))
    }

    res.status(200).json({
        success:true,
        order
    })
})

//Ver todas mis ordenes (usuario logueado)
exports.myOrders= catchAsyncErrors(async(req,res, next)=>{
    const orders= await Order.find({user: req.user._id});

    res.status(200).json({
        success:true,
        orders
    })
})

//Admin
//Ver todas la ordenes (Administrador)
exports.allOrders= catchAsyncErrors(async (req, res, next)=>{
    const orders= await Order.find()

    let cantidadTotal= 0;
    orders.forEach(order =>{
        cantidadTotal= cantidadTotal + order.precioTotal
       // cantidadTotal += order.precioTotal
      
    })

    res.status(200).json({
        success:true,
        cantidadTotal,
        orders
    })

})

// product.inventario - order.items.cantidad



//Editar una orden (admin) 
exports.updateOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id)

    if(!order){
        return next (new ErrorHandler("Orden no encontrada", 404))
    }

    if (order.estado==="Enviado"){
        return next(new ErrorHandler("Esta orden ya fue enviada", 400))
    }

    order.estado= req.body.estado;
    order.fechaEnvio= Date.now();
    console.log(items.cantidad)
    order.items.forEach(async (items) => {
        await updateStock(items.producto, items.cantidad);
      });

    await order.save()

    res.status(200).json({
        success:true,
        order
    })
})





//Eliminar una orden (admin)
exports.deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("Esa orden no esta registrada", 404))
    }
    await order.remove()

    res.status(200).json({
        success:true,
        message:"Orden eliminada correctamente"
    })
})