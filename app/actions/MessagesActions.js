// Author: Artem Sapegin, http://sapegin.me, 2015

import * as types from '../constants/ActionTypes';

export function addMessage(text) {
	return {
		type: types.ADD_MESSAGE,
		text
	};
}

export function deleteMessage(id) {
	return {
		type: types.DELETE_MESSAGE,
		id
	};
}
