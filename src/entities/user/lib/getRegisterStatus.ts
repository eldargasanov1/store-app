import { QueryStatus } from '@reduxjs/toolkit/dist/query';

type ArgTypes = {
	registerStatus: QueryStatus;
	loginStatus: QueryStatus;
};

type GetRegisterStatus = ({
	registerStatus,
	loginStatus,
}: ArgTypes) => QueryStatus;

export const getRegisterStatus: GetRegisterStatus = ({
	registerStatus,
	loginStatus,
}) => {
	let status = QueryStatus.uninitialized;
	if (
		registerStatus === QueryStatus.uninitialized ||
		loginStatus === QueryStatus.uninitialized
	) {
		status = QueryStatus.uninitialized;
	}
	if (
		registerStatus === QueryStatus.pending ||
		loginStatus === QueryStatus.pending
	) {
		status = QueryStatus.pending;
	}
	if (
		registerStatus === QueryStatus.fulfilled ||
		loginStatus === QueryStatus.fulfilled
	) {
		status = QueryStatus.fulfilled;
	}
	if (
		registerStatus === QueryStatus.rejected ||
		loginStatus === QueryStatus.rejected
	) {
		status = QueryStatus.rejected;
	}
	return status;
};
