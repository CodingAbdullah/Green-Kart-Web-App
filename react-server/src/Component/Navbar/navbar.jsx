import React from 'react';
import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {

    let navBarRendering;
    const userSelector = useSelector(state => state.auth.user);

    if (userSelector !== null) {
        navBarRendering = (
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto text-white">
                    <li className="nav-item">
                        <a style={{ paddingLeft: '2rem' }} className="nav-link" href="/order-history">Order History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/product-pricing">Place Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/update-user-info">Update Account Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
            </div>           
        )
    }
    else {
        navBarRendering = (
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a style={{ paddingLeft: '2rem' }} class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
        )
    }
    
    return (  
        <div className="Navbar">
            <nav style={{paddingLeft: '2rem'}} className="navbar navbar-expand-lg bg-success">
                <a className="navbar-brand mx-auto" href="/"><i className="italicK">G</i>reen <i className="italicK">K</i>art</a>
                { navBarRendering }
            </nav>
        </div>
    )
}

export default Navbar;