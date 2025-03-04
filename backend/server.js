const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const plantaRoutes = require('./routes/plantas');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/plantas', plantaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
