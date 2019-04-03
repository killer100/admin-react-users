import React, { Component } from 'react';
import {
	BrowserRouter
} from 'react-router-dom';
import Pages from './AppRoutes';
import LayoutContainer from './components/core/layout/layout.container';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<LayoutContainer>
					<Pages />
				</LayoutContainer>
			</BrowserRouter>
		);
	}
}

export default App;
