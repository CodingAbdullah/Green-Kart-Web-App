import React, { useEffect } from 'react';
import '../CostDashboard/costdashboard.css';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/reducer/cartReducer';

const CostDashboard = (props) => {

    const { product, cost, quantity, uniqueItems } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelector = useSelector(state => state.auth.user);

    useEffect(() => {
        if (userSelector === null) {
            navigate("/");
        }
    }, [userSelector]);

    const costHandler = () => {
        // Send those items to cart for a particular order that has product quantity greater than 0
        dispatch(addItem(product.filter(product => product.quantity > 0)));
        navigate("/checkout");
    }

    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <label className="cost-label">Total Cost: ${ cost }</label><br />
                <label className="cost-label">Total Items: { quantity }</label><br />
                <label className="cost-label"> Total Unique Items: { uniqueItems }</label><br />
                <button className="btn process-order btn-primary" onClick={ costHandler } disabled={ quantity == 0 ? true : false }>Process Order</button>
            </div>
        </div>
    );
}

export default CostDashboard;