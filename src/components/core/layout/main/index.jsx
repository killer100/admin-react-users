import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});

const MainContent = ({ classes, children }) =>
	<main className={classes.content}>
		<div className={classes.toolbar} />
		{children}
	</main>


export default withStyles(styles)(MainContent);