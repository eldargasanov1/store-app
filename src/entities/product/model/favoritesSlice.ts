import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Product } from 'shared';

//===============================================

const favoritesAdapter = createEntityAdapter<Product>();

const initialState = favoritesAdapter.getInitialState();

const favoritesSelectors = favoritesAdapter.getSelectors(
	(state: RootState) => state.product.favorites
);

//===============================================

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: favoritesAdapter.setAll,
		addProductInFavorites: favoritesAdapter.addOne,
		removeProductFromFavorites: favoritesAdapter.removeOne,
		removeAllProductsFromFavorites: favoritesAdapter.removeAll,
	},
});

//===============================================

export const {
	selectById: selectByIdFavorites,
	selectIds: selectIdsFavorites,
	selectEntities: selectEntitiesFavorites,
	selectAll: selectAllFavorites,
	selectTotal: selectTotalFavorites,
} = favoritesSelectors;
export const { reducer: favoritesReducer, actions: favoritesActions } =
	favoritesSlice;
