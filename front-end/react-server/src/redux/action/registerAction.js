import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../action/types';
import axios from 'axios';

const register = (firstname, lastname, age, email, password, address, gender) => (dispatch) => {
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

export default register;