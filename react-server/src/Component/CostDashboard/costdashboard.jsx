import React, { useEffect, useState } from 'react';
import '../CostDashboard/costdashboard.css';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../../redux/reducer/cartReducer';

const CostDashboard = () => {
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const shoppingList = useSelector(state => state.cart.shoppingCart);

    const [cost, updateCost] = useState(0);
    const [quantity, updateQuantity] = useState(0.0);
    const [uniqueItems, updateUniqueItems] = useState(0);

    useEffect(() => {
        let amount = 0.0;
        let quantityAmount = 0;
        let uniqueAmount = 0;

        for (var i = 0; i < shoppingList.length; i++) {
            amount += shoppingList[i].price * shoppingList[i].quantity; // Multiply starting cost by quantity requested
            quantityAmount += shoppingList[i].quantity; // Add on however many user requested of a particular item
            
            if (shoppingList[i].quantity > 0) {
                uniqueAmount += 1; // If a particular item exists, increment unique items by one
            }
        }

        // Update dashboard attributes
        updateCost(amount);
        updateQuantity(quantityAmount);
        updateUniqueItems(uniqueAmount);
    },[shoppingList])


    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <label className="cost-label">Total Cost: ${ cost }</label><br />
                <label className="cost-label">Total Items: { quantity }</label><br />
                <label className="cost-label"> Total Unique Items: { uniqueItems }</label><br />
                <button style={{ marginTop: '2rem' }} className="btn process-order btn-primary" onClick={ () => navigate("/checkout") } disabled={ quantity == 0 ? true : false }>Process Order</button>
                <br />
                <button className="btn process-order btn-danger" disabled = { cost === 0.0 ? true : false } onClick={ () => dispatch(resetCart()) }>Clear Cart</button>
            </div>
        </div>
    );
}

export default CostDashboard;