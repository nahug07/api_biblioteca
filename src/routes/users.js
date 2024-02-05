const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const UserController = require('../controllers/usersController');

// Ruta para crear un nuevo usuario
router.post('/', UserController.createUser);

// Ruta para obtener la lista de usuarios
router.get('/', UserController.getAllUsers);

// Ruta para obtener los detalles de un usuario por su ID
router.get('/:id', UserController.getUserById);

// Ruta para editar la información de un usuario existente
router.put('/:id', UserController.updateUserById);

// Ruta para borrar un usuario por su ID
router.delete('/:id', UserController.deleteUser);

// Exportar el enrutador de usuarios
module.exports = router;