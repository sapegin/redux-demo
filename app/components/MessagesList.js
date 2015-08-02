// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import Block from 'bem-cn';

let b = new Block('messages-list');
let PT = React.PropTypes;

export default React.createClass({
	displayName: 'MessagesList',
	propTypes: {
		messages: PT.instanceOf(Immutable.List)
	},

	renderMessages() {
		let { messages } = this.props;
		if (messages.size) {
			return messages.map((message) => {
				return (
					<li key={message.id}>
						{message.text}
					</li>
				);
			});
		}
		else {
			return (
				<div>No messages yet.</div>
			);
		}
	},

	render() {
		return (
			<ol className={b}>
				{this.renderMessages()}
			</ol>
		);
	}
});
