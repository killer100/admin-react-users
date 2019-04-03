import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export function fetchCustomers(page, pageSize, filter) {
	const params = {
		page,
		pageSize,
		filter
	};
	return axios.get(`${baseUrl}/admin/customers`, {
		params: params
	}).then(response => response.data, err => {
		console.log(err);
		return err;
	});
}

export function getCustomer(id) {
	return axios.get(`${baseUrl}/admin/customers/${id}`)
		.then(response => response.data, err => {
			console.log(err);
			return err;
		});
}