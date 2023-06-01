import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Auth, AuthState } from 'shared';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		tokens: null,
		isAuthFormOpen: false,
	} as AuthState,
	reducers: {
		setAuth: (state, action: PayloadAction<Auth>) => {
			state.user = action.payload.user;
			state.tokens = action.payload.tokens;
		},
		setIsAuthFormOpen: (state, action) => {
			state.isAuthFormOpen = action.payload;
		},
	},
});

export const { reducer: authReducer, actions: authActions } = authSlice;
