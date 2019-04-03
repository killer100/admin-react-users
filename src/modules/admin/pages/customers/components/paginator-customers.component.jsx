import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
	root: {
		flexShrink: 0,
		color: theme.palette.text.secondary,
		marginLeft: theme.spacing.unit * 2.5,
	},
});

function TablePaginationActions({ classes, theme, page, rowsPerPage, count, onChangePage }) {

	const lastPage = Math.ceil(count / rowsPerPage) - 1;

	return <div className={classes.root}>
		<IconButton
			onClick={onChangePage(0)}
			disabled={page === 0}
			aria-label="First Page"
		>
			{theme.direction === 'rtl' ? <Icon>last_page</Icon> : <Icon>first_page</Icon>}
		</IconButton>
		<IconButton
			onClick={onChangePage(page - 1)}
			disabled={page === 0}
			aria-label="Previous Page"
		>
			{theme.direction === 'rtl' ? <Icon>keyboard_arrow_right</Icon> : <Icon>keyboard_arrow_left</Icon>}
		</IconButton>
		<IconButton
			onClick={onChangePage(page + 1)}
			disabled={page >= lastPage}
			aria-label="Next Page"
		>
			{theme.direction === 'rtl' ? <Icon>keyboard_arrow_left</Icon> : <Icon>keyboard_arrow_right</Icon>}
		</IconButton>
		<IconButton
			onClick={onChangePage(
				Math.max(0, lastPage))}
			disabled={page >= lastPage}
			aria-label="Last Page"
		>
			{theme.direction === 'rtl' ? <Icon>first_page</Icon> : <Icon>last_page</Icon>}
		</IconButton>
	</div>
}

export default withStyles(styles, { withTheme: true })(TablePaginationActions);