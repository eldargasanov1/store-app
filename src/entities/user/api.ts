import { api } from 'app/store';
import { CheckEmail, Tokens, RegisterArgs, User, LoginArgs } from 'shared';

const userApi = api.injectEndpoints({
	endpoints: build => ({
		register: build.mutation<User, RegisterArgs>({
			query: user => ({
				url: 'users/',
				method: 'POST',
				body: user,
			}),
		}),
		login: build.mutation<Tokens, LoginArgs>({
			query: user => ({
				url: 'auth/login/',
				method: 'POST',
				body: user,
			}),
		}),
		checkEmail: build.mutation<CheckEmail, Pick<RegisterArgs, 'email'>>({
			query: emailObj => ({
				url: 'users/is-available',
				method: 'POST',
				body: emailObj,
			}),
		}),
		getUser: build.query<User, Pick<Tokens, 'access_token'>>({
			query: ({ access_token }) => ({
				url: 'auth/profile/',
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}),
		}),
		getNewToken: build.mutation<Tokens, Pick<Tokens, 'refresh_token'>>({
			query: ({ refresh_token }) => ({
				url: 'auth/refresh-token',
				method: 'POST',
				body: { refreshToken: refresh_token },
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useCheckEmailMutation,
	useGetUserQuery,
	useGetNewTokenMutation,
} = userApi;
