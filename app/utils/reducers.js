// Author: Artem Sapegin, http://sapegin.me, 2015

import Immutable from 'immutable';
import uniqueId from 'lodash/utility/uniqueId';

// TODO: export
let CollectionContainer = Immutable.Record({
	isFetching: false,
	items: Immutable.List()
});

export function createRemoteCollectionReducer(model) {
	let suffix = (new model())._name.toUpperCase();
	return function collection(state = new CollectionContainer(), action) {
		switch (action.type) {
			case `RECEIVING_${suffix}_LIST`:
				return state.set('isFetching', true);

			case `RECEIVE_${suffix}_LIST`:
				return state.merge({
					isFetching: false,
					items: Immutable.List(action.data.map(obj => new model(obj)))
				});

			case `ADD_${suffix}`:
				let id = uniqueId('local_');
				let props = Object.assign({}, action, { id });
				return state.update('items', list => list.unshift(new model(props)));

			case `DELETE_${suffix}`:
				return state.update('items', list => list.filter(obj => obj.id !== action.id));

			default:
				return state;
		};
	};
}
