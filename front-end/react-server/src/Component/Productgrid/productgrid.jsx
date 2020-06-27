import React, { Component } from 'react';
import Productcard from '../Productcard/productcard';
import Footer from '../Footer/footer';
import './productgrid.css';
import Costdashboard from '../Costdashboard/costdashboard';


class Productgrid extends Component {
    constructor() {
        super();

        const names = ['Artichoke', 'Asparagus', 'Avocado', 'Bok Choy', 
        'Broccoli', 'Brussel Sprouts', 'Cabbage', 'Califlower', 'Celery', 'Chilli', 'Clover',
        'Collard Green', 'Corn', 'Cucumber', 'Green Beans', 'Green Pepper', 'Kale', 'Leek', 'Lettuce', 
        'Mint', 'Mustard Green', 'Okra', 'Parsley', 'Peas', 'Plantain', 'Spinach', 'Squash', 
        'Swiss Chard', 'Watercress', 'Zucchini'];
        
        var products = [];
        var startingCost = 1.25;

        for (var i = 0; i < names.length; i++){
            products.push({id: i+1, name: names[i], quantity: 0, price: startingCost});
            startingCost += 0.25;
        }

        this.state = {
            product: products,
            totalCost: 0.00,
            totalQuantity: 0,
            uniqueItems: 0
        }
    }
    
    updateIncrementValue = (id) => {
        var prod = this.state.product;
        var cost = this.state.totalCost;

        var addUniqueItem = prod[id - 1].quantity == 0 ? 1 : 0;
        var newUniqueValue = this.state.uniqueItems;

        var quantity = this.state.totalQuantity;
        var newQuantity = quantity + 1;

        prod[id - 1].quantity = prod[id - 1].quantity + 1;
        cost += prod[id - 1].price;

        this.setState({product: prod, totalCost: cost, uniqueItems: newUniqueValue + addUniqueItem, 
            totalQuantity: newQuantity}); 
    };

    updateDecrementValue = (id) => {
        var prod = this.state.product;
        var cost = this.state.totalCost;

        prod[id - 1].quantity = prod[id - 1].quantity - 1;
        cost -= prod[id - 1].price;

        var uniqueItemCount = prod[id - 1].quantity == 0 ? 1 : 0;
        var uniqueItemCountValue = this.state.uniqueItems;

        var quantity = this.state.totalQuantity;
        var newQuantity = quantity - 1;

        this.setState({product: prod, totalCost: cost, uniqueItems: uniqueItemCountValue - uniqueItemCount, totalQuantity: newQuantity});
    };

    updateResetValue = (id) => {
        var prod = this.state.product;
        var cost = this.state.totalCost;

        cost -= prod[id - 1].quantity * prod[id - 1].price;

        var totalQuantity = this.state.totalQuantity;
        var newTotalQuantity =  totalQuantity - prod[id - 1].quantity;

        var uniqueQuantity = this.state.uniqueItems;
        var newUniqueQuantity = prod[id - 1].quantity == 0 ? 0 : 1;

        uniqueQuantity -= newUniqueQuantity;

        prod[id - 1].quantity = 0;

        this.setState({product: prod, totalCost: cost, totalQuantity: newTotalQuantity, uniqueItems: uniqueQuantity});
    }

    render() {
        return (
            <div className="product-grid col-centered">
                <div className="container">
                    <h5 className="inventory-title">Inventory (Maximum five per item)</h5>
                    <div className="row mx-auto">
                        {this.state.product.map(item => 
                        <Productcard key={item.id} product={item}
                        onIncrement={this.updateIncrementValue} onReset={this.updateResetValue} onDecrement={this.updateDecrementValue} />)}
                    </div> 
                        <Costdashboard cost={this.state.totalCost} quantity={this.state.totalQuantity} uniqueItems={this.state.uniqueItems} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Productgrid;