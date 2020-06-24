import React from 'react';
import './navbar.css';

const Navbar = () => {

    return (  
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-success">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Product Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand mx-auto" href="#"><i className="italicK">G</i>reen <i className="italicK">K</i>art</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;