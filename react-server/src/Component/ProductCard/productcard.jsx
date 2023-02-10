import React from 'react'
import '../ProductCard/productcard.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../../redux/reducer/cartReducer';

const ProductCard = (props) => {
    const shoppingList = useSelector(state => state.cart.shoppingCart); // product list
    const dispatch = useDispatch();

    const name = props.product.name.toLowerCase().replace(' ', '_');

    const incrementHandler = (id) => {
        // Increment particular item quantity and update global state (cart)
        // Deep copy shopping list
        let updateList = JSON.stringify(shoppingList);
        let newList = JSON.parse(updateList);

        newList[id - 1].quantity = newList[id - 1].quantity + 1;
        dispatch(updateCart(newList)); // Dispatch action
    }

    const decrementHandler = (id) => {
        // Decrement particular item quantity and update global state (cart)
        // Deep copy shopping list
        let updateList = JSON.stringify(shoppingList);
        let newList = JSON.parse(updateList);

        newList[id - 1].quantity = newList[id - 1].quantity - 1;
        dispatch(updateCart(newList)); // Dispatch action
    }

    const resetItemHandler = (id) => {
        // Reset particular item quantity and update global state (cart)
        // Deep copy shopping list
        let updateList = JSON.stringify(shoppingList);
        let newList = JSON.parse(updateList);

        newList[id - 1].quantity = 0;
        dispatch(updateCart(newList)); // Dispatch action
    }

    return (
        <div className="product-card col-sm-6 col-md-4 col-lg-3">
            <div className="card-deck">
                <div className="card">
                    <h5 className="card-title">{props.product.name}</h5>
                    <div>
                        <div>
                            <h6 className="price-title">Price: ${props.product.price}/Item</h6>
                        </div>
                        <img className="img-vegetable" src={require(`../../assets/greenies/${name}.jpg`)} width="100" height="100" />
                    </div>
                    <div>
                        <button className= "btn btn-primary btn-sm incrementButton" disabled={props.product.quantity < 5 ? false : true} onClick={() => incrementHandler(props.product.id)}>+</button>
                        <label className="quantity-label">{props.product.quantity}</label>
                        <button className="btn btn-danger btn-sm decrementButton" disabled={props.product.quantity == 0 ? true : false} onClick={() => decrementHandler(props.product.id)}>-</button>
                    </div>
                    <div>
                        <button className= "btn btn-warning btn-sm resetButton" onClick={() => resetItemHandler(props.product.id)}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;