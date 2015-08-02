// Author: Artem Sapegin, http://sapegin.me, 2015

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppLayout from './AppLayout';
import * as MessagesActions from '../actions/MessagesActions';

export default connect(state => state)(React.createClass({
	displayName: 'App',

	render() {
		let { dispatch, messages } = this.props;
		let actions = bindActionCreators(MessagesActions, dispatch);
		return (
			<AppLayout messages={messages} actions={actions}/>
		);
	}
}));
