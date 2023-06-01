import { FC, memo } from 'react';
import styles from './SmallBanner.module.scss';
import { Button } from 'shared';
import { Link } from 'react-router-dom';

interface PresentationalProps {
	backgroundText: string;
	subtitle: string;
	title: string;
}

export const SmallBannerPresentational: FC<PresentationalProps> = memo(
	({ backgroundText, subtitle, title }) => {
		return (
			<div className={styles['small-banner']}>
				<div className={styles['info']}>
					<div className={styles['background-text']}>{backgroundText}</div>
					<div className={styles['subtitle']}>{subtitle}</div>
					<div className={styles['title']}>{title}</div>
				</div>
				<Button component={Link} to={'/'}>
					Shop Now
				</Button>
				<div className={`_image-ibg ${styles['image']}`}>
					<img src='images/computer.png' alt='' />
				</div>
			</div>
		);
	}
);
