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
  };
  state = {
    mobileOpen: false,
  };

  componentDidMount() {
    Prism.highlightAll();
    const hash = window && window.location && window.location.hash;
    if (hash) {
      const id = hash.split('#')[1];
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
    const { classes, posts, children } = this.props;

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
            content="react reactnative material design components"
          />

          <link rel="icon" href="favicon.ico" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <CssBaseline />
        <Drawer
          open={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          posts={posts}
        />
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <main className={classes.content} style={{ scrollBehavior: 'smooth' }}>
          {children}
        </main>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    maxWidth: 900,
    width: `calc(100% - ${240}px)`,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 40,
  },
});

export default withStyles(styles, { withTheme: true })(PageLayout);
