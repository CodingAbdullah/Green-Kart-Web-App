import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import './ordercheckout.css';

const OrderCheckout = () => {
    const userSelector = useSelector(state => state.auth.user);
    const cartSelector = useSelector(state => state.cart.shoppingCart);

    const navigate = useNavigate();

    useEffect(() => {
        if ( userSelector === null ) {
            navigate("/"); // User not defined, redirect to home page
        }
    }, []);

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
                { cartSelector.map(item => {
                    return (
                        <tr>
                            <td scope="item-name row">{item.name}</td>
                            <td scope="item-image row"><img src={require(`../../assets/greenies/${item.name.toLowerCase().replace(" ", "_")}.jpg`)} width="100" height="100" /></td>
                            <td scope="item-quantity row">{item.quantity}</td>
                            <td scope="item-price row">${item.price*item.quantity}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )

    const orderHandler = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ cart: cartSelector }),
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
            {table}
            </div>
            <button onClick={orderHandler} class="btn btn-success" onclick={orderHandler}>Checkout</button>
        </div>
    )
}

export default OrderCheckout;