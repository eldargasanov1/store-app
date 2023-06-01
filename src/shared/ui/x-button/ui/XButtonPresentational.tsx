import { FC } from 'react';
import styles from './XButton.module.scss';
import { Button, SITE_URL } from 'shared';

interface PresentationalProps {
	onClick: () => void;
}

export const XButtonPresentational: FC<PresentationalProps> = ({ onClick }) => {
	return (
		<Button
			disableDefaultStyles={true}
			className={styles['x-button']}
			onClick={onClick}
		>
			<svg className={styles['icon']}>
				<use href={`${SITE_URL}/src/shared/images/sprite.svg#close`} />
			</svg>
		</Button>
	);
};
