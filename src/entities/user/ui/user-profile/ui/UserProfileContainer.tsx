import { ReactElement, forwardRef } from 'react';
import { UserProfilePresentational } from './UserProfilePresentational';
import { useAppSelector } from 'app/store';
import { useAuthMe } from 'entities/user';

interface ContainerProps {
	secondaryAction?: ReactElement;
	isActionOpen?: boolean;
	onClick?: () => void;
}

export const UserProfileContainer = forwardRef<HTMLDivElement, ContainerProps>(
	(props, ref) => {
		const { status } = useAuthMe();
		const user = useAppSelector(state => state.auth.user);

		return (
			<UserProfilePresentational
				user={user}
				status={status}
				ref={ref}
				{...props}
			/>
		);
	}
);
