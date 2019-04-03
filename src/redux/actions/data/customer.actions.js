import {
	createActions
} from 'reduxsauce'

import {
	fetchCustomers,
	getCustomer
} from '../../../api/admin/customer.api';

const {
	Creators,
	Types
} = createActions({
	fetchCustomersBegin: [],
	fetchCustomersSuccess: ['items', 'page', 'pageSize', 'total'],
	fetchCustomersFailure: ['error'],
	getCustomerBegin: [],
	getCustomerSuccess: ['customer'],
	getCustomerFailure: ['error'],
	clearCustomerForm: [],
});

const AsyncActions = {

	fetchCustomers: dispatch => (page, pageSize, filters) => {

		dispatch(Creators.fetchCustomersBegin());

		fetchCustomers(page, pageSize, filters).then((data) => {
			dispatch(Creators.fetchCustomersSuccess(data.items, page, pageSize, data.total));
		}).catch(error => {
			dispatch(Creators.fetchCustomersFailure(error));
		});

	},

	getCustomer: (dispatch) => id => {

		dispatch(Creators.getCustomerBegin());

		getCustomer(id).then((data) => {
			dispatch(Creators.getCustomerSuccess(data.customer));
		}).catch(error => {
			dispatch(Creators.getCustomerFailure(error));
		});

	}
};

export {
	AsyncActions,
	Creators,
	Types
};