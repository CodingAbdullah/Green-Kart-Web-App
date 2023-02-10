import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './orderhistory.css';

const OrderHistory = () =>  {
    const navigate = useNavigate();
    const userSelector = useSelector(state => state.auth.user);

    const [orders, updateOrderHistory] = useState({
        orderHistory: []
    });

    useEffect(() => {
        if (userSelector === null) {
            navigate("/")
        }
        else {
            const options = {
                method: 'POST',
                body: JSON.stringify({ email: userSelector.user.email }),
                headers : {
                    'content-type' : 'application/json',
                    'Authorization': 'Bearer ' + userSelector.token
                }
            };
    
            // Retrieve user order history set headers
            axios.post("http://localhost:5001/order-history", options)
            .then(response => {
                updateOrderHistory(prevState => {
                    return {
                        ...prevState,
                        orderHistory: response.data.orders
                    }
                });
            })
            .catch(err => console.log(err));
        }
    }, [userSelector]);

    const homeHandler = () => {
        navigate("/");
    }

    return (
        <div>
            <h5 className="inventory-title-checkout">User Order History</h5>
            <table class="table large-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Order Description</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                { 
                    orders.orderHistory[0] && orders.orderHistory.map(item => {
                        // Use the timestamp attribute assigned to model instead of custom date attribute
                        let day = item.createdAt.split("T")[0];
                        let time = item.createdAt.split("T")[1].split(":")

                        return (
                            <tr>
                                <td>{ day + " " + time[0] + ":" + time[1] + "-UTC" }</td>
                                <table class="table inner-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price/Item</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(item.order_description).map(food => {
                                                let price = "$" + item.order_description[food].price
                                                return (
                                                    <tr>
                                                        <td>{ item.order_description[food].name }</td>
                                                        <td>{ item.order_description[food].quantity }</td>
                                                        <td>{ price }</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <td>{ "$" + item.total_cost }</td>
                            </tr>
                        )}
                )}
            </table>
            <button class="btn btn-success order-history-button" onClick={ homeHandler }>Go Home</button>
        </div>
    )
}

export default OrderHistory;