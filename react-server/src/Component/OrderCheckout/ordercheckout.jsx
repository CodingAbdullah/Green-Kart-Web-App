import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import './ordercheckout.css';

const OrderCheckout = () => {
    const userSelector = useSelector(state => state.auth.user);
    const cartSelector = useSelector(state => state.cart.shoppingCart);

    const navigate = useNavigate();
    const [itemsOrdered, updateItemsOrdered] = useState([]);

    const [quantity, updateQuantity] = useState(0);
    const [cost, updateCost] = useState(0);

    useEffect(() => {
        if ( userSelector === null ) {
            navigate("/"); // User not defined, redirect to home page
        }
        else {
            // Deep copy state
            let items = JSON.stringify(cartSelector);
            let serializedItems = JSON.parse(items);

            // Filter those items with a quantity selected by user
            updateItemsOrdered((prevState) => {
                return [...serializedItems.filter(item => item.quantity > 0)]
            });
            
            let amt = 0;
            let tmpQ = 0;
            
            for (var i = 0; i < cartSelector.length; i++) {
                amt += cartSelector[i].price*cartSelector[i].quantity;
                tmpQ += cartSelector[i].quantity;
            }

            // Update quantity and cost
            updateQuantity(tmpQ);
            updateCost(amt);
        }
    }, [cartSelector]);

    // Assemble table with user current requested items
    let table = (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Cost of Item</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    itemsOrdered.map(item => {
                        return (
                            <tr>
                                <td scope="item-name row">{item.name}</td>
                                <td scope="item-image row"><img src={require(`../../assets/greenies/${item.name.toLowerCase().replace(" ", "_")}.jpg`)} width="100" height="100" /></td>
                                <td scope="item-quantity row">{item.quantity}</td>
                                <td scope="item-price row">${item.price*item.quantity}</td>
                            </tr>
                        )
                })}
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td># of Items: {quantity}</td>
                        <td>Total Cost: ${cost}</td>
                    </tr>
                </tbody>
            </table>
    )

    const orderHandler = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ cart: itemsOrdered }),
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Bearer ' + userSelector.token
            }
        }

        try {
            const completeRequest = await axios.post("http://localhost:5001/order-checkout", options);
            
            if (completeRequest.status === 201){
                alert("Successful transaction");
                navigate("/");
            }
        }
        catch (err){
            alert("Error in transaction. " + err);
            navigate("/product-pricing");
        }
    }

    return (
        <div className="table-form">
            <div class="container table-container">
                <div>
                    <h5 className="inventory-title-checkout">Your List of Items for Checkout</h5>
                    { table }
                </div>
            </div>
            <button onClick={ orderHandler } class="btn btn-success signup-button">Checkout</button>
        </div>
    )
}

export default OrderCheckout;