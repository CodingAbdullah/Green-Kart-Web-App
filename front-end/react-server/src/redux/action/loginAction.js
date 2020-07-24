import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import axios from 'axios';

const login = (email, password) => (dispatch) => {
        const body = JSON.stringify({email, password});

        const config = {
            'Content-Type': 'application/json'
        }

        axios.post("/loginSubmitForm", body, config).then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            console.log("There is an error validating form " + err);
            dispatch({
                type: LOGIN_FAILURE
            });
        });
}

export default login;