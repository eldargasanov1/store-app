import { MainProvider } from './MainProvider';
import './index.scss';
import { Routing } from './routing';

export const App = () => {
	return (
		<MainProvider>
			<Routing />
		</MainProvider>
	);
};
