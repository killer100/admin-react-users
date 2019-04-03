import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import PaginatorCustomersComponent from './paginator-customers.component';



function CustomerGrid({ customers, page, total, pageSize, gridDefinition, getData }) {

	return <Paper>
		<Table>
			<TableHead>
				<TableRow>
					{gridDefinition.columns.map(
						(x, i) => <TableCell key={i} align={x.align} >{x.label}</TableCell>
					)}
				</TableRow>
			</TableHead>
			<TableBody>
				{customers.map(
					(row) => <TableRow key={row._id}>
						{gridDefinition.columns.map(
							(x, i) => <TableCell key={i} align={x.align} >{row[x.field]}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						colSpan={3}
						count={total}
						rowsPerPage={pageSize}
						page={page - 1}
						SelectProps={{
							native: true,
						}}
						onChangePage={newPage => e => { getData(newPage + 1, pageSize) }}
						onChangeRowsPerPage={e => { getData(1, e.target.value) }}
						ActionsComponent={PaginatorCustomersComponent}
					/>
				</TableRow>
			</TableFooter>
		</Table>
	</Paper>
}

export default CustomerGrid;