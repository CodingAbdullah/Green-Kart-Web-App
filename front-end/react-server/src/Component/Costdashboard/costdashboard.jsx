import React from 'react';
import '../Costdashboard/costdashboard.css';

const Costdashboard = (props) => {

    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <h4 className="cost-dash-board-title">Cost Dashboard</h4>
                <label className="cost-label">Total Cost: ${props.cost}</label><br />
                <label className="cost-label">Total Items: {props.quantity}</label><br />
                <label className="cost-label"> Total Unique Items: {props.uniqueItems}</label><br />
                <button href="/billing" disabled={props.quantity == 0 ? true : false} className="btn process-order btn-primary"> Process Order </button>
            </div>
        </div>
    );
}

export default Costdashboard;