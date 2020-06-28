const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    purchase_id : {
        required: true,
        type: Number
    },
    membership_id : {
        required: true,
        type: Number
    },
    date : {
        required: true,
        type: Date,
        default : Date.now
    },
    order_description : {
        required: true,
        type: String
    },
    total_cost : {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Order", orderSchema);