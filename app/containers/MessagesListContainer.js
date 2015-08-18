// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import MessagesList from '../components/MessagesList';

let PT = React.PropTypes;

export default React.createClass({
	displayName: 'MessagesListContainer',
	propTypes: {
		messages: PT.instanceOf(Immutable.Record)
	},

	componentDidMount() {
		let { messages, actions } = this.props;
		if (!messages.items.size) {
			actions.loadMessageList();
		}
	},

	render() {
		return (
			<MessagesList {...this.props}/>
		);
	}
});
