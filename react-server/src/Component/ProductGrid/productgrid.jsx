import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/productcard';
import CostDashboard from '../CostDashboard/costdashboard';
 
import './productgrid.css';

const ProductGrid = () => {
        // Gather global state and update accordinly using actions and dispatch
        const userSelector = useSelector(state => state.auth.user);
        const cartSelector = useSelector(state => state.cart);
        const navigate = useNavigate();

        useEffect(() => {
            if (userSelector === null ){
                navigate("/");
            }
        }, [])

        // Look how lean this gets with redux toolkit ;)
        // No need to pass props down as redux store takes care of the global cart that is our redux state
        if (cartSelector.shoppingCart === null){
            return <div>Loading...</div>
        }
        return (
                <div className="product-grid col-centered">
                    <div className="container">
                        <h5 className="inventory-title">Inventory (Maximum five per item)</h5>
                        <div className="row">
                            {
                                cartSelector.shoppingCart.map(item => 
                                    <ProductCard key={ item.id } product={ item } />
                                )
                            }
                        </div> 
                            <CostDashboard />
                    </div>
                </div>
            );
        }

export default ProductGrid;