import { REGISTER_SUCCESS, REGISTER_FAILURE, 
    USER_LOADED, USER_AUTH_FAILURE, 
    LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null
}

const auth = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);

    switch (type) {
        case USER_LOADED:

            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }

        case USER_AUTH_FAILURE:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                isAuthenticated: false
            }

        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state,
                ...payload,
                isAuthenticated: true
            }

        case REGISTER_FAILURE:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state,
                isAuthenticated: true,
                ...payload
            }
            
        case LOGIN_FAILURE:
            localStorage.removeItem('token');

            return {
                ...state,
                isAuthenticated: false,
                user: null
            }

        default:
            return state;
    }
}

export default auth;