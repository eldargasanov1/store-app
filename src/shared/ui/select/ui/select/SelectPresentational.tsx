import { FC, useRef, useState } from 'react';
import styles from './Select.module.scss';
import { OptionProps, SelectProps } from 'shared';
import { useEvent, useOutsideClick } from 'shared/lib';
import clsx from 'clsx';
import { Option, SITE_URL } from 'shared';

export const SelectPresentational: FC<SelectProps> = ({
	selected = null,
	options,
	placeholder,
	onChange,
	onClose,
}) => {
	const rootRef = useRef<HTMLUListElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
		onClose && onClose();
	};
	const handleOptionClick = useEvent((option: OptionProps) => {
		setIsOpen(false);
		onChange && onChange(option);
	});

	useOutsideClick({
		elementRef: rootRef,
		triggerRef,
		onOutsideClick: handleClose,
		enabled: isOpen,
	});

	return (
		<div className={styles['select']}>
			<button
				type='button'
				className={clsx(styles['button'], {
					[styles['open']]: isOpen,
				})}
				ref={triggerRef}
				onClick={() => setIsOpen(prev => !prev)}
			>
				<div className={styles['placeholder']}>
					{selected?.title || placeholder}
				</div>
				<svg className={styles['icon']}>
					<use href={`${SITE_URL}/src/shared/images/sprite.svg#plus`} />
				</svg>
			</button>
			{isOpen && (
				<ul ref={rootRef} className={styles['list']}>
					{options.map((option, i) => (
						<Option key={i} option={option} onClick={handleOptionClick} />
					))}
				</ul>
			)}
		</div>
	);
};
