import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAIL } from '../action/types';
import login from '../action/loginAction';
import register from '../action/registerAction';

const initialState = {
    isAuthenticated: false,
    user: [],
}

const authentication = (state = initialState, action) => {

    switch (action.type){

        case LOGIN_SUCCESS:
        
        case LOGIN_FAILURE:

        case REGISTER_SUCCESS:

        case REGISTER_FAIL:
    }
}

export default authentication;