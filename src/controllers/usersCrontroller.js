const User = require("../models/userModel");


// Controlador para obtener la lista de usuarios
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista de usuarios" });
  }
}

// Controlador para obtener los detalles de un usuario por su ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los detalles del usuario" });
  }
}

// Controlador para crear un nuevo usuario
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
}

// Controlador para actualizar la información de un usuario por su ID
async function updateUserById(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
}

// Controlador para eliminar un usuario por su ID
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndRemove(userId);

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser
};