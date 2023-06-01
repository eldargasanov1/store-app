import ContentLoader from 'react-content-loader';
import { useResize } from 'shared';

export const SliderSkeleton = (props: any) => {
	const currentWidth = useResize();

	const isPC = !currentWidth || currentWidth === 'pc';
	const isTablet = currentWidth === 'tablet';
	const isMobile = currentWidth === 'mobile';
	const isSmallMobile = currentWidth === 'small-mobile';

	const width =
		(isPC && 485) ||
		(isTablet && 698) ||
		(isMobile && 410) ||
		(isSmallMobile && 250) ||
		0;
	const height =
		(isPC && 375) ||
		(isTablet && 808) ||
		(isMobile && 520) ||
		(isSmallMobile && 360) ||
		0;
	const viewBox = `0 0 ${width} ${height}`;

	const mainSlideWidth =
		(isPC && 375) ||
		(isTablet && 698) ||
		(isMobile && 410) ||
		(isSmallMobile && 250) ||
		0;
	const mainSlideHeight =
		(isPC && 375) ||
		(isTablet && 698) ||
		(isMobile && 410) ||
		(isSmallMobile && 250) ||
		0;

	const smallSliderY = height - 90;

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
			<rect
				x='0'
				y='0'
				rx='8'
				ry='8'
				width={mainSlideWidth}
				height={mainSlideHeight}
			/>
			{isPC ? (
				<>
					<rect x='395' y='0' rx='8' ry='8' width='90' height='90' />
					<rect x='395' y='95' rx='8' ry='8' width='90' height='90' />
					<rect x='395' y='190' rx='8' ry='8' width='90' height='90' />
				</>
			) : (
				<>
					<rect x='0' y={smallSliderY} rx='8' ry='8' width='90' height='90' />
					<rect x='95' y={smallSliderY} rx='8' ry='8' width='90' height='90' />
					<rect x='190' y={smallSliderY} rx='8' ry='8' width='90' height='90' />
				</>
			)}
		</ContentLoader>
	);
};
