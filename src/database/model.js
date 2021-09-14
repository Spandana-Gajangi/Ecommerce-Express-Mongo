const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    item_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports.orderModel = Order;