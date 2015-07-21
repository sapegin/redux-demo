// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import uuid from 'random-uuid-v4';
import * as types from '../constants/ActionTypes';

let Message = Immutable.Record({
	id: null,
	text: ''
});

let initialState = Immutable.List.of(
	new Message({
		id: 1,
		text: 'Hello'
	}),
	new Message({
		id: 2,
		text: 'World'
	})
);

export default function messages(state = initialState, action) {
	switch (action.type) {
		case types.ADD_MESSAGE:
			let id = uuid();
			return state.unshift(new Message({
				id: id,
				text: action.text
			}));

		case types.DELETE_TODO:
			return state.filter(message => message.id !== action.id);

		default:
			return state;
	};
}
