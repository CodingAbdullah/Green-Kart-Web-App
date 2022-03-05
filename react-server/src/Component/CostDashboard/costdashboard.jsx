import React from 'react';
import '../CostDashboard/costdashboard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { shoppingAction } from '../../redux/action/shoppingAction';

const CostDashboard = (props) => {
    const dispatch = useDispatch();
    
    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <label className="cost-label">Total Cost: ${props.cost}</label><br />
                <label className="cost-label">Total Items: {props.quantity}</label><br />
                <label className="cost-label"> Total Unique Items: {props.uniqueItems}</label><br />
                <Link to="/checkout">
                    <button className="btn process-order btn-primary" disabled={props.quantity == 0 ? true : false}>Process Order</button>
                </Link>
            </div>
        </div>
    );
}

export default CostDashboard;