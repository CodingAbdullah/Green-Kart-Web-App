import { REGISTER_SUCCESS, REGISTER_FAILURE, USER_AUTH_FAILURE, USER_LOADED } from './types';
import setAuthToken  from '../util/authToken';
import axios from 'axios';

export const loadUser = () => (dispatch) => {
    if (localStorage.token){
        setAuthToken(localStorage.token);
    }
        axios.get("/auth")
        .then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch(err => {
            console.log("There was an error validating the token " + err);
            dispatch({
                type: USER_AUTH_FAILURE
            });
        });
}

export const register = (firstname, lastname, age, email, password, address, gender) => (dispatch) => {
    const body = JSON.stringify({firstname, lastname, age, email, password, address, gender});

    const config = {
        headers : {
            'Content-type': 'application/json'
        }
    }

    axios.post('/signUpForm', body, config)
    .then(response => {
        console.log(response.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    })
    .catch(err => {
        console.log("Error exists while trying to register user" + err);
        dispatch({
            type: REGISTER_FAILURE
        });
    })
}