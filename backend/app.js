const express=require("express");
const cors = require('cors')
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const path = require("path")

if(process.env.NODE_ENV!=="PRODUCTION") require('dotenv').config({path:'backend/config/config.env'})

app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));

//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/api',usuarios)
app.use('/api', ordenes)

if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
}

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app