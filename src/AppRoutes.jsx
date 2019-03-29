import React from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './pages/home/home.component';
import PostsContainer from './pages/posts/posts.container';


const routes = [
	{ path: '/', component: HomeComponent },
	{ path: '/posts', component: PostsContainer },
];

const Pages = () =>
	<React.Fragment>
		{routes.map((route, index) =>
			<Route key={index} path={route.path} exact component={route.component} />
		)}
	</React.Fragment>



export default Pages;