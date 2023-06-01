import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		value: '',
		isSearchFormOpen: false,
	},
	reducers: {
		setSearch: (state, action) => {
			state.value = action.payload;
		},
		setIsSearchFormOpen: (state, action) => {
			state.isSearchFormOpen = action.payload;
		},
	},
});

export const { reducer: searchReducer, actions: searchActions } = searchSlice;
