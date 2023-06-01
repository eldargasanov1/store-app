export interface User {
	id: number;
	name: string;
	role: string;
	email: string;
	password: string;
	avatar: string;
}
export interface RegisterArgs {
	name: string;
	email: string;
	password: string;
	avatar: string;
}
export type LoginArgs = Pick<RegisterArgs, 'email' | 'password'>;
export interface Tokens {
	access_token: string;
	refresh_token: string;
}
export interface CheckEmail {
	isAvailable: boolean;
}
export interface Auth {
	user: User | null;
	tokens: Tokens | null;
}

export interface AuthState extends Auth {
	isAuthFormOpen: boolean;
}

export type StatusQueryType =
	| 'uninitialized'
	| 'pending'
	| 'fulfilled'
	| 'rejected';
