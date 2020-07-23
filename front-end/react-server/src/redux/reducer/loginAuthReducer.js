import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
}

const loginAuth = (state = initialState, action) => {

    switch (action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                
                isAuthenticated: true
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default loginAuth;
