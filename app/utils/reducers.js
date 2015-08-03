// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import uuid from 'random-uuid-v4';

export function createRemoteCollectionReducer(model) {
	let suffix = (new model())._name.toUpperCase();
	return function collection(state = Immutable.List(), action) {
		switch (action.type) {
			case `RECEIVE_${suffix}_LIST`:
				return Immutable.List(action.data.map(obj => new model(obj)));

			case `ADD_${suffix}`:
				let id = uuid();
				return state.unshift(new model(Object.assign({}, action, { id })));

			case `DELETE_${suffix}`:
				return state.filter(obj => obj.id !== action.id);

			default:
				return state;
		};
	};
}
