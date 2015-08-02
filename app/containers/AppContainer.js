// Author: Artem Sapegin, http://sapegin.me, 2015

import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../store';

export default React.createClass({
	displayName: 'AppContainer',

	render() {
		return (
			<Provider store={store}>
				{() => <App /> }
			</Provider>
		);
	}
});
