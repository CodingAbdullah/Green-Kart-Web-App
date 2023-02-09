import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../service/authService';

// Create async thunk functions for dispatching actions
// Check localstorage if token already exists, if so.. assign to initial state

let userStorage = localStorage.getItem('user');

export const login = createAsyncThunk('auth/login', async (state, thunkAPI) => {

    try {
        return authService.login(state)
    }
    catch (err) {
        return thunkAPI.createWithValue(err);
    }
});

// Create async thunk function for logout

export const logout = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        authService.logout();
    }
    catch (err) {
        return thunkAPI.createWithValue(err);
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: userStorage ? JSON.parse(userStorage) : null,
        token: null,
        isLoading: false,
        isError: false,
        isSuccess: false
    },
    reducers : {
        reset : (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending, (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(login.success, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(login.rejected, (state) => {
            state.user = null;
            state.token = null;
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false
        })
    }
});

export const { reset } = authSlice.actions; // Export action (reset)

let authReducer = authSlice.Reducer;

export default authReducer; // Export as a default, the reducer