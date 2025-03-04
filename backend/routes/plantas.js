const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Obtener todas las plantas
router.get('/', async (req, res) => {
  try {
    const plantas = await Plant.find();
    res.json(plantas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar una nueva planta (solo para administradores)
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body;

  const nuevaPlanta = new Plant({ nombre, descripcion, precio, imagen });
  
  try {
    await nuevaPlanta.save();
    res.status(201).json(nuevaPlanta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
