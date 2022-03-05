const Order = require("../model/Order");

exports.getOrderHistory = (req, res) => {
    console.log(req.user);

    const { user } = req.user;

    Order.find({ email : { $eq : user.email }}).then(result => {
        console.log(result);

        res.status(200).json({
            orders: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            msg: err
        });
    })
}

exports.orderCheckout = (req, res) => {

}