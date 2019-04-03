import React from 'react';
import CustomersContainer from './pages/customers/customers.container';
import { Route } from 'react-router-dom';

const routes = [
	{ path: '/admin/customers', component: CustomersContainer },
];

function AdminRouting() {

	return <React.Fragment>
		{routes.map((route, index) =>
			<Route key={index} path={route.path} exact component={route.component} />
		)}
	</React.Fragment>
}

export default AdminRouting;