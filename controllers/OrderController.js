const Order = require('../models/orders');
const OrderController = {};

//Get all Orders

OrderController.gerOrders = async (req, res) => {

    Order.findAll()
        .then(resp => {
            res.send(resp);
        });
};

//Get Order from an User

OrderController.getUserOrder = async (req, res) => {
    try {

        //FALTA



    } catch (error) {
        res.send(error);
    }




}

//Generate new Order

OrderController.registerOrder = async (req, res) => {

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
};

//Update Order

OrderController.updateOrder = async (req, res) => {

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

};

//Delete Order

OrderController.deleteOrder = async (req, res) => {

    try {
        let data = req.params;
        let resp = await Order.destroy({
            where: { id_article: data.id_article }

        })
        console.log(resp);

        if (resp == 1) {
            res.send('Order has been deleted');
        } else {
            res.send("Order hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

};


module.exports = OrderController;