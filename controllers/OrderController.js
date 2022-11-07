const Order = require('../models/orders');
const OrderController = {};

//Get all Orders

OrderController.gerOrders = async (req, res) => {
    try {
        const resp = await Order.findAll()
        res.send(resp)
    } catch (error) {
        res.send(error);
    }
};

//Get Orders from an User

OrderController.getUserOrders = async (req, res) => {

    try {
        const resp = await Order.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error);
    }
}

//Generate New Order

OrderController.registerOrder = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Order.create({

            user_id: data.user_id,
            order_date: data.order_date,
            return_date: data.return_date,
            serie_id: data.serie_id,
            film_id: data.film_id
        })

        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};

//Update An Existing Order

OrderController.updateOrder = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Order.update(data, {
            where: { id_article: req.params.id_article }
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