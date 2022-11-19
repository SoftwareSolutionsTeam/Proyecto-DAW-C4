const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary= require("cloudinary")

//Setear el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

//Seteamos archivo de configuracion
if(process.env.NODE_ENV==="PRODUCTION") require('dotenv').config({path:'backend/config/config.env'})


//Configurar base de datos
connectDatabase();

//Configurar Cloudinary
// cloudinary.config({
//   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//   api_key:process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// })

//para llamar al servidor
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo... puerto:: ${process.env.PORT} modo: ${process.env.NODE_ENV} `
  );
});

