// Author: Artem Sapegin, http://sapegin.me, 2015

import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const store = createStore(combineReducers(reducers));

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
