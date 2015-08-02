// Author: Artem Sapegin, http://sapegin.me, 2015

import Header from './Header';
import Footer from './Footer';
import MessageFormContainer from '../containers/MessageFormContainer';
import MessagesListContainer from '../containers/MessagesListContainer';

export default React.createClass({
	displayName: 'App',

	render() {
		return (
			<div>
				<Header/>
				<MessageFormContainer {...this.props}/>
				<MessagesListContainer {...this.props}/>
				<Footer/>
			</div>
		);
	}
});
