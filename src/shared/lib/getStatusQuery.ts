import { StatusQueryType } from 'shared';

type ArgsType = {
	[key: string]: boolean;
};

type GetStatusQuery = ({
	isFetching,
	isError,
	isSuccess,
	isUninitialized,
}: ArgsType) => StatusQueryType;

export const getStatusQuery: GetStatusQuery = ({
	isFetching,
	isError,
	isSuccess,
	isUninitialized,
}) => {
	let status: StatusQueryType = 'uninitialized';
	if (isFetching) {
		status = 'pending';
	}
	if (isError) {
		status = 'rejected';
	}
	if (isSuccess) {
		status = 'fulfilled';
	}
	if (isUninitialized) {
		status = 'uninitialized';
	}
	return status;
};
