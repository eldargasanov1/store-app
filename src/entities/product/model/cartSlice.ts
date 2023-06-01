import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ProductCart } from 'shared';

//===============================================

const cartAdapter = createEntityAdapter<ProductCart>({
	selectId: cartProduct => cartProduct.cartId,
});

const initialState = cartAdapter.getInitialState();

const cartSelectors = cartAdapter.getSelectors(
	(state: RootState) => state.product.cart
);

//===============================================

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: cartAdapter.setAll,
		addProductInCart: cartAdapter.addOne,
		updateProductInCart: cartAdapter.updateOne,
		removeProductFromCart: cartAdapter.removeOne,
		removeAllProductsFromCart: cartAdapter.removeAll,
	},
});

//===============================================

export const {
	selectById: selectByIdCart,
	selectIds: selectIdsCart,
	selectEntities: selectEntitiesCart,
	selectAll: selectAllCart,
	selectTotal: selectTotalCart,
} = cartSelectors;
export const { reducer: cartReducer, actions: cartActions } = cartSlice;
