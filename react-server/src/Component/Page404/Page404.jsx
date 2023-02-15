import React from 'react';
import { useNavigate } from 'react-router';

const Page404 = () => {
    const navigate = useNavigate(); // Using react-router
    
    return (
        <div className="page404-form">
            <div className="container page404-container">
                <form className="page404-form">
                    <h1 className="form-title">This page does not exist</h1>
                    <button type="submit" class="btn login-button btn-success" onClick={ () => navigate("/") }>Go Back</button>
                </form>
            </div>
        </div>
    )
}

export default Page404;