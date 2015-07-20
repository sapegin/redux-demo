// Author: Artem Sapegin, http://sapegin.me, 2015

import Block from 'bem-cn';

let b = new Block('messages-list');
let PT = React.PropTypes;

export default React.createClass({
	displayName: 'MessagesList',
	propTypes: {
		messages: PT.array
	},

	renderMessages() {
		let { messages } = this.props;
		if (messages && messages.length) {
			return messages.map((message) => {
				return (
					<div>
						{message.text}
					</div>
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
			<div className={b}>
				{this.renderMessages()}
			</div>
		);
	}
});
