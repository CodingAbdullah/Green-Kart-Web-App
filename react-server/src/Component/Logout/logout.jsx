import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducer/authReducer';
import { useNavigate } from 'react-router';

const Logout = () => {

    // Set up hooks for clearing storage and redirecting...
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelector = useSelector(state => state.auth.user);

    useEffect(() => {
        if (userSelector === null){
            navigate("/"); // User already logged off, redirect to home page
        }    
        else {
            dispatch(logout()); // If user is defined in storage, clear storage and dispatch logout action
            navigate("/"); // Redirect user to home page
        }
    }, [userSelector, navigate, dispatch, logout])
}

export default Logout;