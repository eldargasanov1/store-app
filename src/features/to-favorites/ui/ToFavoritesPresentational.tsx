import { FC } from 'react';
import styles from './ToFavorites.module.scss';
import { Link, useParams } from 'react-router-dom';
import { SITE_URL } from 'shared';

export const ToFavoritesPresentational: FC = () => {
	const { category } = useParams();

	return (
		<Link to={`/${category}/favorites`} className={styles['to-favorites']}>
			<svg className={`${styles['icon']} ${styles['icon-favorites']}`}>
				<use href={`${SITE_URL}/src/shared/images/sprite.svg#heart`} />
			</svg>
		</Link>
	);
};
