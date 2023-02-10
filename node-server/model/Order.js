const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email : {
        required: true,
        type: String
    },
    order_description : {
        required: true,
        type: Array
    },
    total_cost : {
        required: true,
        type: Number
    },
    },
    { 
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);