import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (  
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-success">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/productPricing">Product Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <Link className="navbar-brand mx-auto" to="/"><i className="italicK">G</i>reen <i className="italicK">K</i>art</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;