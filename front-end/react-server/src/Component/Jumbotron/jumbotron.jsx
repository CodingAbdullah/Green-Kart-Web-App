import React from 'react';
import './jumbotron.css';
import homePic from '../../greenies/spinach.jpg';

const Jumbotron = () => {

    return (
        <div className="jumbo">
            <h1 className="cart-title">Welcome to <i class="italicK">G</i>reen <i class="italicK">K</i>art</h1>
            <p className="cart-paragraph">Your One-Stop Shop for all your Greenies!!</p>
            <img class='garden-image' src={homePic} width='200' height='200'/><br />
        </div>
    )
}

export default Jumbotron;