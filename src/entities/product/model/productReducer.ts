import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer, favoritesReducer, searchReducer } from 'entities/product';

export const productReducer = combineReducers({
	cart: cartReducer,
	favorites: favoritesReducer,
	search: searchReducer,
});
