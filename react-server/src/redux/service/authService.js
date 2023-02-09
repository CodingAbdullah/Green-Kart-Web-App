const axios  = require('axios');

// Creating a login function with global state passed in to verify user
const login = async (state) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'content-type' : 'application/json'
        }
    }
    
    const response = await axios.post('http://localhost:5001/login', options)

    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data
}

const logout = async () => {

    // Remove the user from localStorage and return
    localStorage.removeItem('user');
}

const authService = {
    login,
    logout
}

export default authService;