import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null
}

const registerAuth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
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
        default:
            return state;
    }
}

export default registerAuth;