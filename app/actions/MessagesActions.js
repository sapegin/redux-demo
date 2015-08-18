// Author: Artem Sapegin, http://sapegin.me, 2015

import { REVERSE_MESSAGE } from '../constants/ActionTypes';
import Message from '../models/message';
import { createRemoteCollectionActions } from '../utils/actions';

let collectionActions = createRemoteCollectionActions(Message);

export let loadMessageList = collectionActions.loadMessageList;
export let addMessage = collectionActions.addMessage;
export let deleteMessage = collectionActions.deleteMessage;

export function reverseMessage(id) {
	return {
		type: REVERSE_MESSAGE,
		id
	};
}
