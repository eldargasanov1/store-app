import { forwardRef, memo } from 'react';
import styles from './Menu.module.scss';
import { Button, MenuButtonProps } from 'shared';

interface PresentationalProps {
	menuProps: MenuButtonProps[];
	onClose?: () => void;
}

export const MenuPresentational = memo(
	forwardRef<HTMLDivElement, PresentationalProps>(
		({ menuProps, onClose }, ref) => {
			return (
				<div className={styles['menu']} ref={ref}>
					{menuProps.map((menuProp, i) => {
						const { onClick, ...rest } = menuProp;

						return (
							<Button
								key={i}
								disableDefaultStyles
								className={styles['btn']}
								onClick={e => {
									if (onClose) {
										onClose();
									}
									if (onClick) {
										onClick(e);
									}
								}}
								{...rest}
							>
								{rest.text}
							</Button>
						);
					})}
				</div>
			);
		}
	)
);
