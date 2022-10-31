const express = require('express');
const router = express.router();

const Order = require('../models/orders');

//Get all Orders

router.get('/getOrders', (req, res) => {

    Order.findAll()
        .then(resp => {
            res.send(resp);
        });
});

//Generate new Order

router.post('/registerOrder', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Order.create({
            id_article: data.id_article,
            order_date: data.order_date,
            return_date: data.return_date
        })

        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
})

//Update Order

router.put('/updateOrder', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Order.update({

            order_date: data.order_date,
            return_date: data.return_date


        }, {
            where: { id_article: data.id_article }
        });

        res.send({
            resp: resp,
            message: 'Order updated correctly'
        })


    } catch (error) {
        res.send(error);
    }

});

//Delete Order

router.delete('/deleteOrder', async (req, res) => {

    try {
        let data = req.params;
        let resp = await Order.destroy({
            where: { id_article: data.id_article }

        })
        console.log(resp);

        if (resp == 1) {
            res.send('Order has been deleted');
        }else{
            res.send("Order hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

})



module.exports = router;