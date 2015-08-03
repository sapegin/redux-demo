// Author: Artem Sapegin, http://sapegin.me, 2015

import * as types from '../constants/ActionTypes';

export function loadMessages() {
	return (dispatch) => {
		fetch('../data/data.json')
			.then((resp) => {
				resp.json()
					.then((data) => {
						dispatch(receiveMessageList(data));
					})
				;
			})
		;
	};
}

export function receiveMessageList(data) {
	return {
		type: types.RECEIVE_MESSAGE_LIST,
		data
	};
}

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
