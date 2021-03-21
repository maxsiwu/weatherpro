import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
    },
    headerLink: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        marginLeft: '1rem',
    },
    selected: {
        color: theme.palette.primary.main,
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root} elevation={1}>
        <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h5" color="primary">
                    <i className="fas fa-rainbow"></i>&nbsp;
                    <b>WeatherPro</b>
                </Typography>
                <Box display="flex">
                    <NavLink to="/home" className={classes.headerLink}activeClassName={classes.selected}>
                        <Typography variant="h6">Home</Typography>
                    </NavLink>
                    <NavLink to="/my-cities" className={classes.headerLink}activeClassName={classes.selected}>
                        <Typography variant="h6">My Cities</Typography>
                    </NavLink>
                    <NavLink to="/settings" className={classes.headerLink}activeClassName={classes.selected}>
                        <Typography variant="h6">Settings</Typography>
                    </NavLink>
                </Box>
            </Box>
            
        </Toolbar>
      </AppBar>
    );
}

export default Header;
