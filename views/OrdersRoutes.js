const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');



//Get all Orders

router.get('/getAll', OrderController.gerOrders);

//Generate new Order

router.post('/registerOrder', OrderController.registerOrder);

//Update Order

router.put('/updateOrder', OrderController.updateOrder);

//Delete Order

router.delete('/deleteOrder', OrderController.deleteOrder);

module.exports = router;