import { FC } from 'react';
import styles from './SearchButton.module.scss';
import { SITE_URL } from 'shared';

interface PresentationalProps {
	onOpen: () => void;
}

export const SearchButtonPresentational: FC<PresentationalProps> = ({
	onOpen,
}) => {
	return (
		<button type='button' className={styles['search-button']} onClick={onOpen}>
			<div className={styles['button']}>
				<svg className={styles['icon']}>
					<use xlinkHref={`${SITE_URL}/src/shared/images/sprite.svg#search`} />
				</svg>
			</div>
			<div className={styles['input']}>Search for anything...</div>
		</button>
	);
};
