const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Ruta de registro de usuario
router.post('/register', authController.register);

// Ruta de inicio de sesión
router.post('/login', authController.login);

module.exports = router;
