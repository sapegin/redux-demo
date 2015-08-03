// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import Message from '../models/message';
import { createRemoteCollectionReducer } from '../utils/reducers';
import { REVERSE_MESSAGE } from '../constants/ActionTypes';

let collection = createRemoteCollectionReducer(Message);

export default function messages(state = Immutable.List(), action) {
	state = collection(state, action);

	switch (action.type) {
		case REVERSE_MESSAGE:
			// TODO
			return state;

		default:
			return state;
	};
}
