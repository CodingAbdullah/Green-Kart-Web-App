import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../action/types';
import axios from 'axios';

const register = (firstname, lastname, age, email, password, address, gender) => (dispatch) => {
    const body = JSON.stringify(firstname, lastname, age, email, password, address, gender);

    const config = {
        'Content-type': 'application/json'
    }

    axios.post('/register', body, config)
    .then(response => {
        return {
            type: REGISTER_SUCCESS,
            payload: response
        }
    })
    .catch(err => {
        console.log("Error exists while trying to register user" + err);

        return {
            type: REGISTER_FAILURE
        }
    })
}

export default register;