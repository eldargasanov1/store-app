import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'app/store';
import { PropsWithChildren } from 'shared';

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};
