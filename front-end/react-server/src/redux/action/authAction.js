import axios from 'axios';

export const register = (firstname, lastname, age, email, password, address, gender) => (dispatch) => {
    const body = JSON.stringify({firstname, lastname, age, email, password, address, gender});

    const config = {
        headers : {
            'Content-type': 'application/json'
        }
    };

    axios.post('/signUpForm', body, config)
    .then(response => {
        console.log(response.data);
        })
    .catch(err => {
        console.log("Error exists while trying to register user " + err);
    });
}

export const login = (email, password) => (dispatch) => {
     
    const body = JSON.stringify({email, password});
    const config = {

        headers : {
            'Content-type': 'application/json'
        }
    };

    axios.post("/loginForm", body, config)
    .then(response => {

        dispatch({
            type: "LOG_IN", 
            payload: response.data
        });
    })
    .catch(err => {
        console.log("There was an error validating login credentials " + err);

        dispatch({
            type: "LOG_IN_FAILURE"
        });
    });
}