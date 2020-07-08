import React from 'react';
import '../Costdashboard/costdashboard.css';
import { Link } from 'react-router-dom';

const Costdashboard = (props) => {

    const location = {
        pathname : '/bill',
        state : {
            product_info: props.product
        }
    }
    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <label className="cost-label">Total Cost: ${props.cost}</label><br />
                <label className="cost-label">Total Items: {props.quantity}</label><br />
                <label className="cost-label"> Total Unique Items: {props.uniqueItems}</label><br />
                <Link to={location}>
                    <button className="btn process-order btn-primary" disabled={props.quantity == 0 ? true : false}>Process Order</button>
                </Link>
            </div>
        </div>
    );
}

export default Costdashboard;