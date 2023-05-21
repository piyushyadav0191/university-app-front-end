import Index from './Index';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Index />
		</Provider>
	);
};

export default App;
