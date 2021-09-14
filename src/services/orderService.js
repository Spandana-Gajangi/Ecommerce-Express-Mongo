const { orderModel } = require('../database/model');

class OrderService {
    async getAllOrdersByDate(req, res, next) {
        try {
            console.log('------------------body', req.body);
            const orders = await orderModel.find(req.body);
            res.json(orders);
        } catch (error) {
            console.log('-------------error', error);
            throw error;
        }
    }

    async getAllOrdersByOrderId(req, res, next) {
        const { order_id } = req.body
        try {
            const orders = await orderModel.findOne({ order_id });
            console.log('djhsdbj', id)
            res.json(orders);
        } catch (error) {
            console.log('-------------error', error);
            next(error);
        }
    }

    async create(req, res, next) {
        console.log('----------body', req.body);
        let rawOrder = req.body;
        rawOrder.order_date = new Date(rawOrder.order_date);
        rawOrder.delivery_date = new Date(rawOrder.delivery_date);
        const order = new orderModel(rawOrder);
        console.log('-------------------', order);
        try {
            await order.save();
            res.json(order);
        } catch (error) {
            console.log('-------------error', error);
            throw error;
        }
    }

    async update(req, res, next) {
        const { order_id, delivery_date } = req.body;
        console.log('-------------------', order_id, delivery_date);
        try {
            await orderModel.updateOne({ order_id }, { delivery_date });
            const updatedOrder = await orderModel.findOne({ order_id });
            res.json(updatedOrder);
        } catch (error) {
            console.log('-------------error', error);
            throw error;
        }
    }

    async delete(req, res, next) {
        const { order_id } = req.body;
        console.log('-------------------', order_id);
        try {
            await orderModel.remove({ order_id });
            res.json({ status: 'OK' });
        } catch (error) {
            console.log('-------------error', error);
            throw error;
        }
    }


}

module.exports.orderService = new OrderService()