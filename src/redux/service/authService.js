import axios from 'axios';

// Creating a login function with global state passed in to verify user
const login = async (state) => {

    // Send state object for login verification
    const options = {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'content-type' : 'application/json'
        }
    }
    
    // Obtain the response and check if value is acceptable
    const response = await axios.post('http://localhost:5001/login', options)

    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data
}

const logout = async () => {
    // Instead of simply remove item, clear storage immediately as cart information will be stored here as well
    localStorage.clear();
}

const authService = {
    login,
    logout
}

export default authService;