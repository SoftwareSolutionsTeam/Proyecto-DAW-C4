const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct, nuevoProducto} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");


router.route('/productos').get(getProducts)

// router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); 
router.route('/producto/nuevo').post(newProduct); 

router.route('/producto/:id').get(getProductById); 
// router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

router.route('/producto/:id').put(updateProduct);

// router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); 

router.route('/producto/:id').delete( deleteProduct); 


module.exports=router;