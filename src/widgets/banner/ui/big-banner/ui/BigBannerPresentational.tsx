import { FC, useRef, memo } from 'react';
import styles from './BigBanner.module.scss';
import { Link } from 'react-router-dom';
import { Button, highlightLetters } from 'shared';
import clsx from 'clsx';

interface PresentationalProps {
	text: {
		smallText: string;
		mainText: string;
	};
	imageText: {
		fullText: string;
		mainText: string | string[];
	};
	linkTo: string;
}

export const BigBannerPresentational: FC<PresentationalProps> = memo(
	({
		text = {
			smallText: 'text',
			mainText: 'text',
		},
		imageText = {
			fullText: 'text',
			mainText: 'text',
		},
		linkTo = '/',
	}) => {
		const imageTextRef = useRef<HTMLDivElement>(null);
		const finalImageText = highlightLetters({
			fullText: imageText.fullText,
			mainText: imageText.mainText,
		});
		if (imageTextRef.current) {
			imageTextRef.current.innerHTML = finalImageText || '';
		}

		return (
			<div className={styles['big-banner']}>
				<div className={styles['content']}>
					<div className={styles['info']}>
						<div className={styles['text-block']}>
							<div className={styles['text']}>{text.smallText}</div>
							<div className={styles['main-text']}>{text.mainText}</div>
						</div>
						<Button component={Link} to={linkTo} className={styles['button']}>
							See more
						</Button>
					</div>
					<div
						className={clsx('_image-ibg', {
							[styles['shoe']]: styles['shoe'],
						})}
					>
						<img src='images/shoe.png' alt='' />
					</div>
					<div
						className={clsx('_image-ibg', {
							[styles['devices']]: styles['devices'],
						})}
					>
						<img src='images/devices.png' alt='' />
						<div className='image-text'></div>
					</div>
				</div>
				<div
					className={clsx('_image-ibg', {
						[styles['image']]: styles['image'],
					})}
				>
					<img src='images/banner.png' alt='' />
					<div className={styles['image-text']} ref={imageTextRef}></div>
				</div>
			</div>
		);
	}
);
