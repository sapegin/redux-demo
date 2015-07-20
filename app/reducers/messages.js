// Author: Artem Sapegin, http://sapegin.me, 2015

import uuid from 'random-uuid-v4';
import * as types from '../constants/ActionTypes';

let initialState = [
	{
		id: 1,
		text: 'Hello'
	},
	{
		id: 2,
		text: 'World'
	}
];

export default function messages(state = initialState, action) {
	switch (action.type) {
		case types.ADD_MESSAGE:
			let id = uuid();
			return [
				{
					id: id,
					text: action.text
				},
				...state
			];

		case types.DELETE_TODO:
			return state.filter(message => message.id !== action.id);

		default:
			return state;
	};
}
