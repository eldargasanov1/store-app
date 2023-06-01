import ContentLoader from 'react-content-loader';
import { useResize } from 'shared';

export const ProductDetailsSkeleton = (props: any) => {
	const currentWidth = useResize();

	const isPC = !currentWidth || currentWidth === 'pc';
	const isTablet = currentWidth === 'tablet';
	const isMobile = currentWidth === 'mobile';
	const isSmallMobile = currentWidth === 'small-mobile';

	const width =
		(isPC && 395) ||
		(isTablet && 698) ||
		(isMobile && 410) ||
		(isSmallMobile && 250) ||
		0;
	const height = !isSmallMobile ? 375 : 350;
	const viewBox = `0 0 ${width} ${height}`;

	const lastLinesY = height - 12;
	const rightLastLineX = width - 80;

	const rightButtonX = !isSmallMobile ? 160 : 0;
	const rightButtonY = !isSmallMobile ? 217 : 267;

	return (
		<ContentLoader
			speed={2}
			width={width}
			height={height}
			viewBox={viewBox}
			backgroundColor='#212123'
			foregroundColor='#979797'
			{...props}
		>
			<rect x='0' y='0' rx='8' ry='8' width='245' height='22' />
			<rect x='0' y='32' rx='8' ry='8' width='60' height='25' />
			<rect x='0' y='77' rx='8' ry='8' width={width} height='25' />
			<rect x='0' y='122' rx='8' ry='8' width={width} height='25' />
			<rect x='0' y='167' rx='8' ry='8' width={width} height='30' />
			<rect x='0' y='217' rx='8' ry='8' width='150' height='40' />
			<rect
				x={rightButtonX}
				y={rightButtonY}
				rx='8'
				ry='8'
				width='150'
				height='40'
			/>
			<rect x='0' y={lastLinesY} rx='8' ry='8' width='80' height='12' />
			<rect
				x={rightLastLineX}
				y={lastLinesY}
				rx='8'
				ry='8'
				width='80'
				height='12'
			/>
		</ContentLoader>
	);
};
