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
    this.handleDifferentLayouts();
  }
  componentDidUpdate() {
    this.handleDifferentLayouts();
  }

  handleDifferentLayouts() {
    const location = window && window.location;
    const pathName = location.pathname;
    if (pathName == '/' && !this.state.isTemporary) {
      this.setState({ isTemporary: true, mobileOpen: false });
    } else if (this.state.isTemporary && pathName !== '/') {
      this.setState({ isTemporary: false });
    }
  }

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
          <Header handleDrawerToggle={this.handleDrawerToggle} />
          <div
            style={{
              maxWidth: isTemporary ? '100%' : 760,
              width: isTemporary ? '100%' : `calc(100% - ${240}px)`,
              marginLeft: isTemporary ? 0 : 'calc(240px + 130px)',
              marginRight: isTemporary ? 0 : 40,
              paddingTop: 40,
            }}>
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
