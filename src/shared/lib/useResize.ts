import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

type UseResize = () => 'pc' | 'tablet' | 'mobile' | 'small-mobile' | null;

export const useResize: UseResize = () => {
	const [currentWidth, setCurrentWidth] = useState<ReturnType<UseResize>>(null);

	const SMALL_MOBILE = 479.98;
	const MOBILE = 767.98;
	const TABLET = 991.98;
	const PC = 1310;

	const onResize = () => {
		const width = document.documentElement.clientWidth;
		if (width < SMALL_MOBILE) {
			setCurrentWidth('small-mobile');
		}
		if (width > SMALL_MOBILE && width < MOBILE) {
			setCurrentWidth('mobile');
		}
		if (width > MOBILE && width < TABLET) {
			setCurrentWidth('tablet');
		}
		if (width > TABLET && width < PC) {
			setCurrentWidth('pc');
		}
	};

	useWindowEvent('resize', onResize);

	return currentWidth;
};
