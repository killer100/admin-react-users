import React, { Component } from 'react';
import {
	BrowserRouter
} from 'react-router-dom';
import Pages from './AppRoutes';
import LayoutContainer from './components/core/layout/layout.container';
import AdminRouting from './modules/admin/admin-routing.component';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<LayoutContainer>
					<Pages />
					<AdminRouting></AdminRouting>
				</LayoutContainer>
			</BrowserRouter>
		);
	}
}

export default App;
