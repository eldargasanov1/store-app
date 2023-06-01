import { FC, useMemo, memo } from 'react';
import { BigBannerPresentational } from './BigBannerPresentational';

export const BigBannerContainer: FC = memo(() => {
	const text = useMemo(() => ({ smallText: 'NEW YEAR', mainText: 'SALE' }), []);
	const imageText = useMemo(
		() => ({ fullText: 'save up to 50% off', mainText: '50%' }),
		[]
	);

	return (
		<BigBannerPresentational text={text} imageText={imageText} linkTo='/' />
	);
});
