import {
	Types as customersPageActionTypes
} from '../../../actions/ui/admin/customers-page.actions';

import {
	createReducer
} from 'reduxsauce'

const INITIAL_STATE = {
	customersGridDefinition: {
		columns: [{
				label: 'Nombres',
				field: 'name'
			},
			{
				label: 'Apellido',
				field: 'surname'
			},
			{
				label: 'Género',
				field: 'gender'
			},
			{
				label: 'Email',
				field: 'email'
			},
			{
				label: 'Teléfono',
				field: 'phone',
				align: 'right'
			},
			{
				label: 'Dirección',
				field: 'address'
			}
		]
	},
	filter: ''
};


const setFilter = (state = INITIAL_STATE, action) => ({
	...state,
	filter: action.value
});


const HANDLERS = {
	[customersPageActionTypes.SET_FILTER]: setFilter
}

export default createReducer(INITIAL_STATE, HANDLERS);