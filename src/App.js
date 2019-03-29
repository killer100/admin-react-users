import React, { Component } from 'react';
import {
	BrowserRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from './shared/layout';
import Pages from './AppRoutes';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<BrowserRouter>
				<div className={classes.root}>
					<Layout>
						<Pages />
					</Layout>
					<Grid container spacing={24}>
						<Grid item xs={12} md={3}>
						</Grid>
						<Grid item xs={12} md={6}>
						</Grid>
						<Grid item xs={12} md={3}>
						</Grid>
					</Grid>
				</div>
			</BrowserRouter>
		);
	}
}

export default withStyles(styles)(App);
