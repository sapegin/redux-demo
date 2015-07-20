// Author: Artem Sapegin, http://sapegin.me, 2015

import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';
import * as MessagesActions from '../actions/MessagesActions';

export default React.createClass({
	displayName: 'App',

	renderChild({ messages, dispatch }) {
		const actions = bindActionCreators(MessagesActions, dispatch);
		return (
			<div>
				<Header/>
				<MessageForm onAdd={actions.addMessage}/>
				<MessagesList messages={messages} onDelete={actions.deleteMessage}/>
				<Footer/>
			</div>
		);
	},

	render() {
		return (
			<Connector select={state => ({ messages: state.messages })}>
				{this.renderChild}
			</Connector>
		);
	}
});
