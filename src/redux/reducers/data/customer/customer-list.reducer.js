import {
	createReducer
} from 'reduxsauce'

import {
	Types as customerTypes
} from '../../../actions/data/customer.actions';

const INITIAL_STATE = {
	loading: false,
	pagination: {
		items: [],
		page: 1,
		pageSize: 10,
		total: 0
	},
	error: null,
};

const fetchCustomersBegin = (state = INITIAL_STATE) => ({
	...state,
	error: null,
	loading: true,
});

const fetchCustomersSuccess = (state = INITIAL_STATE, action) => ({
	pagination: {
		...state.pagination,
		items: action.items,
		page: action.page,
		pageSize: action.pageSize,
		total: action.total
	},
	error: false,
	loading: false,
});

const fetchCustomersFailure = (state = INITIAL_STATE, action) => ({
	pagination: {
		...INITIAL_STATE.pagination
	},
	error: action.error,
	loading: false,
});

const HANDLERS = {
	[customerTypes.FETCH_CUSTOMERS_BEGIN]: fetchCustomersBegin,
	[customerTypes.FETCH_CUSTOMERS_SUCCESS]: fetchCustomersSuccess,
	[customerTypes.FETCH_CUSTOMERS_FAILURE]: fetchCustomersFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);