/*import {
	Types as layoutTypes
} from '../../actions/ui/layout.actions';
*/


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
	}
};

/*
const openSidebar = (state = INITIAL_STATE, action) => ({
	...state,
	sidebarOpen: true
});

const closeSidebar = (state = INITIAL_STATE, action) => ({
	...state,
	sidebarOpen: false
});
*/

const HANDLERS = {
	//[layoutTypes.OPEN_SIDEBAR]: openSidebar,
	//[layoutTypes.CLOSE_SIDEBAR]: closeSidebar
}

export default createReducer(INITIAL_STATE, HANDLERS);