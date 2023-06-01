import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
	return typeof error === 'object' && error != null && 'status' in error;
}

function isErrorWithMessage(error: unknown): error is { message: string } {
	return (
		typeof error === 'object' &&
		error != null &&
		'message' in error &&
		typeof (error as any).message === 'string'
	);
}

export const getErrorForUser = (
	error: FetchBaseQueryError | SerializedError
) => {
	if (isFetchBaseQueryError(error)) {
		return `FetchBaseQueryError: ${error.status}`;
	}
	if (isErrorWithMessage(error)) {
		return error.message;
	}
};
