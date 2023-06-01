import { useGetUserQuery, useLoginMutation } from '../api';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { authActions } from 'entities/user';
import { useEffect } from 'react';
import { useActionCreators } from 'app/store';

export const useLogin = () => {
	const actionsAuth = useActionCreators(authActions);
	const [loginUser, { status, error, data: tokens }] = useLoginMutation();
	const { data: user } = useGetUserQuery(
		tokens ? { access_token: tokens.access_token } : skipToken
	);
	if (error) {
		throw new Error(`Failed to retrieve user data: ${status}`);
	}

	useEffect(() => {
		if (user && tokens) {
			actionsAuth.setAuth({ user, tokens });
		}
	}, [user, tokens]);

	return { loginUser, status };
};
