import React from 'react';
import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {

    let navBarRendering;
    const userSelector = useSelector(state => state.auth.user);

    if (userSelector !== null) {
        navBarRendering = (
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/order-history">Order History</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/product-pricing">Place Order</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/update-user-info">Update Account Profile</a>
                    </li>
                    <li className="nav-item dropdown">
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
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
        )
    }
    
    return (  
        <nav style={{ paddingLeft: '2rem' }} className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><i className="italicK">G</i>reen <i className="italicK">K</i>art</a>
                <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    { navBarRendering }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;