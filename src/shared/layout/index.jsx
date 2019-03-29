import React from 'react';
import Toolbar from './header/toolbar';
import Main from './main';

const Layout = ({ children }) => <div>
	<Toolbar />
	<Main>{children}</Main>
</div>

export default Layout;