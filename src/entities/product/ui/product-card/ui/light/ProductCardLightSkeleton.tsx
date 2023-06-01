import ContentLoader from 'react-content-loader';

export const ProductCardLightSkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={230}
		height={268}
		viewBox='0 0 230 268'
		backgroundColor='#212123'
		foregroundColor='#979797'
		{...props}
	>
		<rect x='0' y='0' rx='8' ry='8' width='230' height='230' />
		<rect x='55' y='250' rx='8' ry='8' width='120' height='18' />
	</ContentLoader>
);
