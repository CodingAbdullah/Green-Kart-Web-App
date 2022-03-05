import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let navBarRendering;

    if (localStorage.getItem('token')) {
        navBarRendering = (
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Place Order</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>           
        )
    }
    else {
        navBarRendering = (
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
        )
    }
    
    return (  
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-success">
                    <div className="mx-auto order-0">
                        <Link className="navbar-brand mx-auto" to="/"><i className="italicK">G</i>reen <i className="italicK">K</i>art</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                {navBarRendering}
            </nav>
        </div>
    )
}

export default Navbar;