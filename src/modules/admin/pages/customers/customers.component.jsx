import React, { useEffect } from 'react';
import CustomerGrid from './components/grid-customers.component';

function CustomersComponent({ customers, fetchCustomers, customersGridDefinition }) {
	useEffect(() => {
		fetchCustomers(customers.pagination.page, customers.pagination.pageSize);
	}, []);

	return <div>

		<CustomerGrid
			customers={customers.pagination.items}
			gridDefinition={customersGridDefinition}
			page={customers.pagination.page}
			pageSize={customers.pagination.pageSize}
			total={customers.pagination.total}
			getData={(page, pageSize) => fetchCustomers(page, pageSize, null)}>
		</CustomerGrid>

	</div >
}

export default CustomersComponent;
