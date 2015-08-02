// Author: Artem Sapegin, http://sapegin.me, 2015

import MessageForm from '../components/MessageForm';

export default React.createClass({
	displayName: 'MessagesListContainer',

	render() {
		return (
			<MessageForm onAdd={this.props.actions.addMessage}/>
		);
	}
});
