const express = require('express');
const connectDB = require('./config/database');
const expressValidator = require("express-validator");

//routes
const clientesRoutes = require("./routes/clientes");
const pedidosRoutes = require("./routes/pedidos");
const productosRoutes = require("./routes/productos");
const usuariosRoutes = require("./routes/usuarios");

// Cors para el Http
const cors = require('cors');

//conectar Database
connectDB();

//crear el servidor
const app = express();

//validaciones
app.use(expressValidator());

//habilitar cors
app.use(cors());

//habilitar express(bodyparser)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas de la app
app.use('/', clientesRoutes);
app.use('/', pedidosRoutes);
app.use('/', productosRoutes);
app.use('/', usuariosRoutes);

//carpeta publica de las imagenes
app.use(express.static('uploads'));

// puerto
const port = process.env.PORT || 5000;

// escuchando el puerto
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});