import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../service/authService';

// Create async thunk functions for dispatching actions
// Check localstorage if token already exists. If so, assign to initial state

let user = localStorage.getItem('user');

export const login = createAsyncThunk('auth/login', async (state, thunkAPI) => {
    try {
        return authService.login(state)
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

// Create async thunk function for logout
export const logout = createAsyncThunk('auth/logout', async() => {
    return authService.logout();
});

let authSlice = createSlice({
    name : 'auth',
    initialState : {
        user: user ? JSON.parse(user) : null,
        isLoading: false,
        isSuccess: false,
        error: false,
        token: null
    },
    reducers : {
        // Reset indicators to empty values
        reset : (state) => {
            state.isLoading = false;
            state.error = false;
            state.isSuccess = false;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending, (state) => {
            state.user = null;
            state.isLoading = true;
            state.isSuccess = false;
            state.error = false;
            state.token = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false;
            state.error = false;
            state.isSuccess = true;
            state.token = action.payload.token;
        })
        .addCase(login.rejected, (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.error;
            state.token = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.isLoading = false;
            state.isSuccess = false;
            state.error = false;
            state.token = null;
        })
    }
});

export const { reset } = authSlice.actions; // Export action (reset)
export default authSlice.reducer; // Export as a default, the reducer