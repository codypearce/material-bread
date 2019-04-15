import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { Drawer as MaterialDrawer } from '@material-ui/core';
import DrawerContent from './DrawerContent';
import { Drawer as MaterialDrawer } from '../../../../src';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff',
    border: 'none',
    overflow: 'hidden',
  },
});
export default class Drawer extends Component {
  static propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    posts: PropTypes.array,
    drawerType: PropTypes.string,
  };

  render() {
    const { classes, open, handleDrawerToggle, posts, drawerType } = this.props;

    return (
      <MaterialDrawer
        open={open}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <DrawerContent posts={posts} />
      </MaterialDrawer>
    );
  }
}
