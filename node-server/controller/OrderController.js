const Order = require("../model/Order");

exports.getOrderHistory = (req, res) => {
    const { email } = req.body.body.user;

    Order.find({ email : { $eq : email }}).then(result => {
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
    const { email } = req.body.body.user;
    const cart = req.body.body.cart;

    let totalCost = 0.0;

    for (var i = 0 ; i < cart.length; i++){
        totalCost += (cart[i].price)*(cart[i].quantity);
    }
    
    // Set up document to insert into MongoDB
    const insertCart = {
        email: email,
        order_description : cart,
        total_cost: totalCost
    }

    // Save document to database
    const newOrder = new Order(insertCart).save()
    .then(response => {
        res.status(201).json({
            receipt: response 
        })
    })
    .catch(err => {
        res.status(400).json({
            msg: err
        })
    })
}