const initialState = {
    token: "",
    isAuthenticated: false,
    user: {}
}

export const auth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOG_IN":
            localStorage.set('token', payload.token);
            return {
                ...state,
                token: payload.token,
                user: payload,
                isAuthenticated: true,
            }
        case "LOG_IN_FAILURE" || "LOG_OUT":
            localStorage.removeItem('token');
            return {
                ...state,
                token: "",
                user: {},
                isAuthenticated: false,
            }
        default:
            return state;
    }
}