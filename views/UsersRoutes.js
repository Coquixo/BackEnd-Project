const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


//Get all Users

router.get('/getAll', UserController.getUsers);

//Get User by ID

router.get('/getById/:id', UserController.getUserById);

//Create new User

router.post('/registerUser', UserController.registerUser)

//Update existing User

router.put('/updateUser', UserController.updateUser)

//Delete User

router.delete('/deleteUser/:id_user', UserController.deleteUser)

module.exports = router;