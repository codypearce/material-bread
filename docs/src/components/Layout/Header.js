import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Github from '../Icons/Github';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    boxShadow: 'none',
    backgroundColor: '#fafafa',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    classes: PropTypes.object,
    handleDrawerToggle: PropTypes.func,
  };

  render() {
    const { classes, handleDrawerToggle } = this.props;
    return (
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <IconButton>
            <Github />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
