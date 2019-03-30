import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer as MaterialDrawer } from '@material-ui/core';
import DrawerContent from './DrawerContent';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#e3e5e7',
    border: 'none',
    overflow: 'hidden',
  },
});
class Drawer extends Component {
  static propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    posts: PropTypes.array,
  };

  render() {
    const {
      classes,
      theme,
      open,
      handleDrawerToggle,
      posts,
      drawerType,
    } = this.props;

    return (
      <nav className={classes.drawer}>
        <MaterialDrawer
          variant={drawerType || 'temporary'}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <DrawerContent posts={posts} />
        </MaterialDrawer>
      </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Drawer);
