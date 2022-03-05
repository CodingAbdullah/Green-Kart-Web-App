import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const OrderHistory = () =>  {

    let orders = {};
    
    const options = {
        mode: 'cors',
        'content-type' : 'application/json',
        headers : {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };

    useEffect( async () => {
        try {
            axios.get("http://localhost:5050/orderHistory", options).then(response => {
                orders
            })
        }
        catch (err) {

        }
    }, []);


    return (
        <div>
        
        </div>
    )
}


export default OrderHistory;