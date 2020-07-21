import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import axios from 'axios';

const login = (email, password) => (dispatch) => {
        const body = JSON.stringify({email, password});
        const config = {
            'Content-Type': 'application/json'
        }

        axios.post("/auth", body, config).then(response => {
            return {
                type: LOGIN_SUCCESS,
                payload: response
            }

        }).catch(err => {
            console.log("Error trying to login" + err);
            return {
                type: LOGIN_FAILURE
            }
        });
}

export default login;