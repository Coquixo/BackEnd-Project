const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/authController');

//Register New User

router.post('/register', UserController.registerUser)

//Login User

router.post('/login', UserController.loginUser);

//Get All Users

router.get('/getAll', UserController.getUsers);

//Get User by ID

router.get('/getById/:id_user', UserController.getUserById);

//Update An Existing User

router.put('/update/:id_user', UserController.updateUser)

//Delete A User

router.delete('/delete/:id_user', AuthController.assertIsAdmin, UserController.deleteUser)

module.exports = router;