// Author: Artem Sapegin, http://sapegin.me, 2015

import Block from 'bem-cn';

let b = new Block('messages-form');
let PT = React.PropTypes;

export default React.createClass({
	displayName: 'MessagesList',
	propTypes: {
		onAdd: PT.func.isRequired
	},

	getInitialState() {
		return {
			text: ''
		};
	},

	handleKeyDown(event) {
		let text = event.target.value.trim();
		if (event.which === 13) {
			this.props.onAdd(text);
			this.setState(this.getInitialState());
		}
	},

	handleChange(event) {
		this.setState({
			text: event.target.value
		});
	},

	render() {
		return (
			<div className={b}>
				<input type="text" placeholder="Where do you want to go today?" autoFocus
					value={this.state.text} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
			</div>
		);
	}
});
