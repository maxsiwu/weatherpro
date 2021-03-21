import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';

function NavBar() {
    return (
        <AppBar position="fixed" color="primary">
        <Toolbar>
            <Typography variant="h6" color="secondary">
                WeatherPro
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
                <MoreHorizIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;