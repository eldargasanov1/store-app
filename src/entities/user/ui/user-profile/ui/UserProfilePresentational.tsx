import { ReactElement, forwardRef, memo } from 'react';
import styles from './UserProfile.module.scss';
import { Button, SITE_URL, StatusQueryType, User } from 'shared';
import { UserProfileSkeleton } from './UserProfileSkeleton';

interface PresentationalProps {
	user?: User | null;
	onClick?: () => void;
	secondaryAction?: ReactElement;
	isActionOpen?: boolean;
	status: StatusQueryType;
}

export const UserProfilePresentational = memo(
	forwardRef<HTMLDivElement, PresentationalProps>(
		({ user, secondaryAction, onClick, isActionOpen, status }, ref) => {
			const userAvatarUrl =
				user?.avatar || `${SITE_URL}/src/shared/images/avatar.jpg`;
			const userName = user?.name || 'Guest';

			return (
				<div className={styles['wrapper']}>
					<div ref={ref}>
						{status !== 'pending' ? (
							<Button
								disableDefaultStyles={true}
								className={styles['user-profile']}
								onClick={onClick}
							>
								<div className={`_image-ibg ${styles['avatar']}`}>
									<img src={userAvatarUrl} alt='' />
								</div>
								<div className={styles['name']}>{userName}</div>
							</Button>
						) : (
							<UserProfileSkeleton />
						)}
					</div>

					{isActionOpen && (
						<div className={styles['secondaryAction']}>{secondaryAction}</div>
					)}
				</div>
			);
		}
	)
);
