// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import uuid from 'random-uuid-v4';
import { RECEIVE_MESSAGES, ADD_MESSAGE, DELETE_MESSAGE } from '../constants/ActionTypes';

let Message = Immutable.Record({
	id: null,
	text: ''
});

export default function messages(state = Immutable.List(), action) {
	switch (action.type) {
		case RECEIVE_MESSAGES:
			return Immutable.List(action.data.map(obj => new Message(obj)));

		case ADD_MESSAGE:
			let id = uuid();
			return state.unshift(new Message({
				id: id,
				text: action.text
			}));

		case DELETE_MESSAGE:
			return state.filter(message => message.id !== action.id);

		default:
			return state;
	};
}
