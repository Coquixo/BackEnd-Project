const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/authController');

//Register new User

router.post('/register', UserController.registerUser)

//Login user

router.post('/login', UserController.loginUser);

//Get all Users

router.get('/getAll', UserController.getUsers);

//Get User by ID
router.get('/getById/:id_user', UserController.getUserById);

//Update existing User

router.put('/updateUser/:id_user', UserController.updateUser)

//Delete User

router.delete('/delete/:id_user', AuthController.assertIsAdmin, UserController.deleteUser)

module.exports = router;