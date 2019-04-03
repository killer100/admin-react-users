import CustomersComponent from "./customers.component";
import {
	connect
} from 'react-redux';
import {
	AsyncActions
} from '../../../../redux/actions/data/customer.actions';


const mapStateToProps = (state) =>
	({
		customers: state.admin.customersPage.data.customers,
		customersGridDefinition: state.admin.customersPage.ui.customersGridDefinition
	});

const mapDispatchToProps = dispatch => ({
	fetchCustomers: AsyncActions.fetchCustomers(dispatch)
});

const CustomersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomersComponent);


export default CustomersContainer;