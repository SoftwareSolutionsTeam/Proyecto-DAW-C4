const express=require("express");
const cors = require('cors')
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')

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

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app