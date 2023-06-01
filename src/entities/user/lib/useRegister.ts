import { RegisterArgs } from 'shared';
import { useLoginMutation, useRegisterMutation } from '../api';
import { authActions, getRegisterStatus } from 'entities/user';
import { useEffect } from 'react';
import { useActionCreators } from 'app/store';

export const useRegister = () => {
	const actionsAuth = useActionCreators(authActions);
	const [register, { data: user, status: registerStatus }] =
		useRegisterMutation();
	const [login, { data: tokens, status: loginStatus }] = useLoginMutation();
	const status = getRegisterStatus({ registerStatus, loginStatus });

	const registerUser = async (userInfo: Omit<RegisterArgs, 'avatar'>) => {
		await register({
			...userInfo,
			avatar:
				'https://fastly.picsum.photos/id/766/640/640.jpg?hmac=VjUpBB6mPXfE0HoElAaccMwdTNrXatvL7G9rrcHwyZc',
		});

		await login({
			email: userInfo.email,
			password: userInfo.password,
		});
	};

	useEffect(() => {
		if (user && tokens) {
			actionsAuth.setAuth({ user, tokens });
		}
	}, [user, tokens]);

	return { registerUser, status };
};
