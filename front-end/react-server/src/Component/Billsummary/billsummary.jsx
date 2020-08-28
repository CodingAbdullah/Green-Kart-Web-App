import React, { Component, Fragment } from 'react';
import './billsummary.css';

class BillSummary extends Component {

    constructor(props) {
        super(props);
    }
    

    // Sample values to be used to lay out the framework for the bill summary page.. props will pass in the items and quantity desired
    render() {
        return (
            <Fragment className="billSummaryPage">
                <table class="table btn-success">
                    <thead>
                        <tr>
                            <th scope="col">Vegetable</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Cucumber</th>
                            <td>2</td>
                            <td>5.75</td>
                        </tr>
                        <tr>
                            <th scope="row">Squash</th>
                            <td>4</td>
                            <td>5.25</td>
                        </tr>
                        <tr>
                            <th scope="row">Spinach</th>
                            <td>5</td>
                            <td>8.25</td>
                        </tr>
                    </tbody>
                </table>
                <div class="order-confirmation-panel container">
                    <h5 class="order-confirmation-title">Total Cost: $8.25</h5>
                    <button class="btn confirm-order-button btn-success">Confirm Order</button>
                </div>
            </Fragment>
        );
    }
}

export default BillSummary;