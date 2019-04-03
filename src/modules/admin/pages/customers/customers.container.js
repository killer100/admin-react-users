import CustomersComponent from "./customers.component";
import {
	connect
} from 'react-redux';
import {
	AsyncActions
} from '../../../../redux/actions/data/customer.actions';
import {
	Creators as uiActionCreators
} from '../../../../redux/actions/ui/admin/customers-page.actions';

const mapStateToProps = (state) =>
	({
		customers: state.admin.customersPage.data.customers,
		customersGridDefinition: state.admin.customersPage.ui.customersGridDefinition,
		filter: state.admin.customersPage.ui.filter
	});

const mapDispatchToProps = dispatch => ({
	fetchCustomers: AsyncActions.fetchCustomers(dispatch),
	setFilter: (value) => dispatch(uiActionCreators.setFilter(value))
});

const CustomersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomersComponent);


export default CustomersContainer;