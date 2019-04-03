import React from 'react';
import Toolbar from './header/toolbar';
import Main from './main';
import Sidebar from './sidebar/sidebar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

const Layout = ({ classes, children, sidebarOpen, openSidebar, closeSidebar }) =>
    <div className={classes.root}>
        <Toolbar sidebarOpen={sidebarOpen} handleDrawerOpen={openSidebar} />
        <Sidebar open={sidebarOpen} handleClose={closeSidebar} />
        <Main>{children}</Main>
    </div>

export default withStyles(styles)(Layout);