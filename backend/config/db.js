const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/plantas', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1); // Salir si no se puede conectar
  }
};

module.exports = connectDB;
