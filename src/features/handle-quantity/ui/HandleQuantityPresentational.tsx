import { FC } from 'react';
import styles from './HandleQuantity.module.scss';
import { Button } from 'shared';

interface PresentationalProps {
	quantity: number;
	onMinus: () => void;
	onPlus: () => void;
}

export const HandleQuantityPresentational: FC<PresentationalProps> = ({
	onMinus,
	quantity,
	onPlus,
}) => {
	return (
		<div className={styles['handle-quantity']}>
			<Button
				className={styles['minus']}
				onClick={onMinus}
				disabled={quantity === 1}
			>
				<svg className={styles['icon']}>
					<use href='images/sprite.svg#minus' />
				</svg>
			</Button>
			<div className={styles['quantity']}>{quantity}</div>
			<Button className={styles['plus']} onClick={onPlus}>
				<svg className={styles['icon']}>
					<use href='images/sprite.svg#plus' />
				</svg>
			</Button>
		</div>
	);
};
