const app = require("./app");
const connectDatabase = require("./config/database");

//Setear el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

//Importación del archivo de rutas y modelo producto
const rutalistaproductos = require('../backend/routes/listaProductos')
app.use('/api/listaproductos', rutalistaproductos)

//Configurar base de datos
connectDatabase();

//para llamar al servidor
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Servidor iniciado.. puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`
  );
});

