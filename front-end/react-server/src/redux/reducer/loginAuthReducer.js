import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
}

const loginAuth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true
            }

        case LOGIN_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default loginAuth;
