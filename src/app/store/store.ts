import {
	ActionCreatorsMapObject,
	bindActionCreators,
	configureStore,
} from '@reduxjs/toolkit';
import { api } from './api';
import { productReducer } from 'entities/product';
import { authReducer } from 'entities/user';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		product: productReducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActionCreators = (actions: ActionCreatorsMapObject) => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};
