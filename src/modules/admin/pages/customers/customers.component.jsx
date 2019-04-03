import React, { useEffect } from 'react';
import CustomerGrid from './components/grid-customers.component';
import FormFilterCustomers from './components/form-filter-customers.component';

function CustomersComponent({ customers, fetchCustomers, customersGridDefinition, filter, setFilter }) {
	useEffect(() => {
		const { page, pageSize } = customers.pagination;
		fetchCustomers(page, pageSize);
	}, []);

	return <div>

		<FormFilterCustomers
			filter={filter}
			onSearch={newFilter => e => {
				console.log(e);
				e.preventDefault();
				setFilter(newFilter);
				fetchCustomers(1, customers.pagination.pageSize, newFilter)
			}} >
		</FormFilterCustomers>
		<CustomerGrid
			customers={customers.pagination.items}
			gridDefinition={customersGridDefinition}
			page={customers.pagination.page}
			pageSize={customers.pagination.pageSize}
			total={customers.pagination.total}
			getData={(page, pageSize) => fetchCustomers(page, pageSize, filter)}>
		</CustomerGrid>

	</div >
}

export default CustomersComponent;
