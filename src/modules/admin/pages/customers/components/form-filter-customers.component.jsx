import React, { useState } from 'react';

function FormFilterCustomers({ filter, onSearch }) {

	const [value, setValue] = useState(filter);

	return <form onSubmit={onSearch(value)}> {filter}
		<div><input type="text" value={value} onChange={e => setValue(e.target.value)} /></div>
	</form>
}

export default FormFilterCustomers;