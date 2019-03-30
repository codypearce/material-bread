import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import '../../../node_modules/flexboxgrid/css/flexboxgrid.min.css';
import Drawer from './Drawer/Drawer';
import Header from './Header';
import Prism from 'prismjs';

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
  };

  componentDidMount() {
    Prism.highlightAll();
    const hash = window && window.location && window.location.hash;
    if (hash) {
      const id = hash.split('#')[1].toString();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, posts, children, pageContext } = this.props;
    let drawerType = 'permanent';
    if (pageContext.layout === 'home') {
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
              maxWidth: 760,
              width:
                drawerType == 'temporary' ? '100%' : `calc(100% - ${240}px)`,
              marginLeft: drawerType == 'temporary' ? 0 : 'calc(240px + 130px)',
              marginRight: 40,
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
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {},
});

export default withStyles(styles, { withTheme: true })(PageLayout);
