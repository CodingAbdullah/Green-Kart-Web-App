const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id : {
        required: true,
        type: mongoose.ObjectId
    },
    date : {
        required: true,
        type: Date,
    },
    order_descriptsion : {
        required: true,
        type: Object
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