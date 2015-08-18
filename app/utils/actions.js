// Author: Artem Sapegin, http://sapegin.me, 2015

export function createRemoteCollectionActions(model) {
	let modelName = (new model())._name;
	let suffix = modelName.toUpperCase();
	return {
		[`load${modelName}List`]: function() {
			return (dispatch) => {
				dispatch({
					type: `RECEIVING_${suffix}_LIST`
				});
				fetch('../data/data.json')
					.then((resp) => {
						resp.json()
							.then((data) => {
								dispatch({
									type: `RECEIVE_${suffix}_LIST`,
									data
								});
							})
						;
					})
				;
			};
		},
		[`add${modelName}`]: function(text) {
			return {
				type: `ADD_${suffix}`,
				text
			};
		},
		[`delete${modelName}`]: function(id) {
			return {
				type: `DELETE_${suffix}`,
				id
			};
		}
	};
}
