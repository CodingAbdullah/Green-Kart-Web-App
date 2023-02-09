const Order = require("../model/Order");

exports.getOrderHistory = (req, res) => {
    console.log(req.user);

    const { userId } = JSON.parse(req.body.body);

    Order.find({ user_id : { $eq : userId }}).then(result => {
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
   const { userId } = JSON.parse(req.body.body);
   const cart = JSON.parse(req.body.body);

   console.log(cart);
   let totalCost = 0.0;

   for (var i = 0 ; i < cart.length; i++){
       totalCost += (cart[i].price)*(cart[i].quantity);
    }
    
    const insertCart = {
        user_id: userId,
        order_description : {...cart},
        total_cost: totalCost
    }

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