const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const AuthController = require('../controllers/authController')



//Get all Orders

router.get('/getAll', AuthController.assertIsAdmin, OrderController.gerOrders);

//Get Orders by User

router.get('/getUserOrders/:user_id', OrderController.getUserOrders)

//Generate new Order

router.post('/register', OrderController.registerOrder);


//Update Order

router.put('/update/:id_article', OrderController.updateOrder);

//Delete Order

router.delete('/deleteOrder', OrderController.deleteOrder);

module.exports = router;