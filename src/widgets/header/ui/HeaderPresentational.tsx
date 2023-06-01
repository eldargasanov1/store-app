import { FC, memo } from 'react';
import styles from './Header.module.scss';
import { Container, useResize } from 'shared';
import { Logo } from 'features/logo';
import { SearchButton } from 'features/search-button';
import { UserProfile } from 'widgets';
import { ToFavorites } from 'features/to-favorites';
import { ToCart } from 'features/to-cart';

export const HeaderPresentational: FC = memo(() => {
	const currentWidth = useResize();

	const smallerThanMobile =
		currentWidth === 'mobile' || currentWidth === 'small-mobile';

	return (
		<Container className={styles['header']}>
			<Logo />
			{!smallerThanMobile && <UserProfile />}
			{!smallerThanMobile && <SearchButton />}
			<div className={styles['links']}>
				{smallerThanMobile && <SearchButton />}
				<ToFavorites />
				<ToCart />
				{smallerThanMobile && <UserProfile />}
			</div>
		</Container>
	);
});
