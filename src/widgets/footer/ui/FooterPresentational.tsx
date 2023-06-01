import { FC } from 'react';
import styles from './Footer.module.scss';
import { Container, SITE_URL } from 'shared';
import { Logo } from 'features/logo';

export const FooterPresentational: FC = () => {
	return (
		<Container className={styles['footer']}>
			<Logo sx={{ width: 61, height: 25 }} />
			<div className={styles.socials}>
				<a href='https://youtube.com' target='_blank' rel='noreferrer'>
					<svg className={styles['icon']}>
						<use
							xlinkHref={`${SITE_URL}/src/shared/images/sprite.svg#youtube`}
						/>
					</svg>
				</a>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<svg className={styles['icon']}>
						<use
							xlinkHref={`${SITE_URL}/src/shared/images/sprite.svg#instagram`}
						/>
					</svg>
				</a>
				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<svg className={styles['icon']}>
						<use
							xlinkHref={`${SITE_URL}/src/shared/images/sprite.svg#facebook`}
						/>
					</svg>
				</a>
			</div>
		</Container>
	);
};
