import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import '../../../node_modules/flexboxgrid/css/flexboxgrid.min.css';
import '../../styles/global/global.css';
import Drawer from '../Drawer/Drawer';
import Header from './Header';
import Prism from 'prismjs';

require('prismjs/components/prism-jsx.min');
require('prismjs/themes/prism-tomorrow.css');

class PageLayout extends Component {
  static propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    children: PropTypes.node,
    posts: PropTypes.array,
    pageContext: PropTypes.object,
  };
  state = {
    mobileOpen: false,
    isTemporary: false,
    drawerType: 'permanent',
    windowWidth: 0,
  };

  componentDidMount() {
    Prism.highlightAll();
    const location = window && window.location;
    const hash = location.hash;
    if (hash) {
      const id = hash.split('#')[1].toString();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }

    const pathName = location.pathname;
    if (pathName !== '/') {
      this.setLarge();
    } else if (pathName == '/') {
      this.setSmall();
    }

    const mediaQuery = window.matchMedia('(min-width: 1180px)');

    if (mediaQuery.matches && pathName != '/') {
      this.setLarge();
    } else {
      this.setSmall();
    }
    mediaQuery.addListener(mq => {
      if (mq.matches && pathName != '/') {
        this.setLarge();
      } else {
        this.setSmall();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    Prism.highlightAll();
    this.handleDifferentLayouts(prevState);
  }

  setSmall = () => {
    this.setState({ isTemporary: true, mobileOpen: false });
  };

  setLarge = () => {
    this.setState({ isTemporary: false, mobileOpen: true });
  };

  handleDifferentLayouts = () => {
    const location = window && window.location;
    const pathName = location.pathname;
    const width = window.innerWidth;
    const { isTemporary } = this.state;

    if (isTemporary && pathName !== '/' && width >= 1180) {
      this.setLarge();
    } else if (pathName == '/' && !isTemporary) {
      this.setSmall();
    }
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, posts, children } = this.props;
    const { isTemporary } = this.state;

    let drawerType = 'permanent';
    if (isTemporary) {
      drawerType = 'temporary';
    }

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Material Bread</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="React and React Native Components that implement Material Design Components. Designed to be highly customizable"
          />
          <meta
            name="keywords"
            content="react react native material design components"
          />

          <link rel="icon" href="favicon.ico" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <CssBaseline />

        <div>
          <Drawer
            open={this.state.mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle}
            posts={posts}
            drawerType={drawerType}
          />
          <Header
            handleDrawerToggle={this.handleDrawerToggle}
            isTemporary={isTemporary}
          />
          <div
            className={`${
              isTemporary ? 'main--temporaryDrawer' : 'main--permanentDrawer'
            }`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {},
});

export default withStyles(styles, { withTheme: true })(PageLayout);
