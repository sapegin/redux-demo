// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import MessagesList from '../components/MessagesList';

let PT = React.PropTypes;

export default React.createClass({
	displayName: 'MessagesListContainer',
	propTypes: {
		messages: PT.instanceOf(Immutable.List)
	},

	componentDidMount() {
		let { messages, actions } = this.props;
		if (!messages.size) {
			actions.loadMessages();
		}
	},

	render() {
		return (
			<MessagesList {...this.props}/>
		);
	}
});
