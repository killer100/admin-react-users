import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	content: {
		marginTop: 60,
		overflow: 'auto',
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.only('xs')]: {
			paddingLeft: 0,
			paddingRight: 0
		},
	}
});

const MainContent = ({ classes, children }) =>
	<main className={classes.content}>
		{children}
	</main>


export default withStyles(styles)(MainContent);