import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});

const Sidebar = ({ classes, theme, open, handleClose }) => <Drawer
    variant="permanent"
    className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
    })}
    classes={{
        paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        }),
    }}
    open={open}
>
    <div className={classes.toolbar}>
        <IconButton onClick={handleClose}>
            {theme.direction === 'rtl' ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>}
        </IconButton>
    </div>
    <Divider />
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
    <Divider />
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
</Drawer>

export default withStyles(styles, { withTheme: true })(Sidebar);