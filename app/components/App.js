// Author: Artem Sapegin, http://sapegin.me, 2015

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';
import * as MessagesActions from '../actions/MessagesActions';

function select(state) {
	return {
		messages: state.messages
	};
}

export default connect(select)(React.createClass({
	displayName: 'App',

	render() {
		let { dispatch, messages } = this.props;
		let actions = bindActionCreators(MessagesActions, dispatch);
		return (
			<div>
				<Header/>
				<MessageForm onAdd={actions.addMessage}/>
				<MessagesList messages={messages} onDelete={actions.deleteMessage}/>
				<Footer/>
			</div>
		);
	}
}));
