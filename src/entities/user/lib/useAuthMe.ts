import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetNewTokenMutation, useGetUserQuery } from '../api';
import { Tokens, getStatusQuery } from 'shared';
import { useEffect } from 'react';
import { authActions } from 'entities/user';
import { RootState, useActionCreators, useAppSelector } from 'app/store';

export const useAuthMe = () => {
	const actionsAuth = useActionCreators(authActions);
	const stateUser = useAppSelector((state: RootState) => state.auth.user);
	const stateTokens = useAppSelector((state: RootState) => state.auth.tokens);

	const stringifiedTokens = localStorage.getItem('tokens');
	const tokens: Tokens | null = stringifiedTokens
		? JSON.parse(stringifiedTokens)
		: null;

	const [getNewTokens, { data: newTokens }] = useGetNewTokenMutation();

	const {
		data: newUser,
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	} = useGetUserQuery(
		newTokens ? { access_token: newTokens.access_token } : skipToken
	);

	const status = getStatusQuery({
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	});

	useEffect(() => {
		if (!stateUser && !stateTokens && !newTokens && tokens) {
			getNewTokens({ refresh_token: tokens.refresh_token });
		}
	}, []);

	useEffect(() => {
		if (!stateUser && !stateTokens && newUser && newTokens) {
			actionsAuth.setAuth({ user: newUser, tokens: newTokens });
		}
	}, [newUser]);

	return { status };
};
