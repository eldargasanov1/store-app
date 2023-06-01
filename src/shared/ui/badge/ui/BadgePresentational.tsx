import { FC } from 'react';
import styles from './Badge.module.scss';

interface PositionStyle {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

interface PresentationalProps {
	badgeContent: number;
	positionStyle?: PositionStyle;
}

export const BadgePresentational: FC<PresentationalProps> = ({
	badgeContent,
	positionStyle,
}) => {
	return (
		<div className={styles['badge']} style={positionStyle}>
			{badgeContent}
		</div>
	);
};
