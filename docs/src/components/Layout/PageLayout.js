import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import '../../../node_modules/flexboxgrid/css/flexboxgrid.min.css';
import '../../styles/global/global.css';
import Header from './Header';
import Prism from 'prismjs';
import favicon from '../../assets/favicon.ico';
import { Drawer } from '../../../../src/';
import DrawerContent from '../Drawer/DrawerContent';

require('prismjs/components/prism-jsx.min');
require('prismjs/themes/prism-tomorrow.css');

export default class PageLayout extends Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node,
    posts: PropTypes.array,
    pageContext: PropTypes.object,
  };
  state = {
    mobileOpen: false,
    isTemporary: true,
    firstLoaded: false,
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

    this.setState({ firstLoaded: true });
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
    if (typeof window !== `undefined`) {
      const location = window && window.location;
      const pathName = location.pathname;
      const width = window.innerWidth;
      const { isTemporary } = this.state;

      if (isTemporary && pathName !== '/' && width >= 1180) {
        this.setLarge();
      } else if (pathName == '/' && !isTemporary) {
        this.setSmall();
      }
    }
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { posts, children } = this.props;
    const { isTemporary } = this.state;
    if (!this.state.firstLoaded)
      return (
        <div
          style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}
        />
      );

    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Material Bread</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Highly Customizable React Native Material Design Components"
          />
          <meta
            name="keywords"
            content="react react native material design components"
          />

          <meta
            name="google-site-verification"
            content="pnInoKlqzLFjeCNTW6F-BnibL8xE4qnA7Tghks5dLwo"
          />

          <link rel="shortcut icon" href={favicon} />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <div>
          <Drawer
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            type={isTemporary ? 'modal' : 'permanent'}
            drawerContent={<DrawerContent posts={posts} />}
            position={'fixed'}>
            <Header
              handleDrawerToggle={this.handleDrawerToggle}
              isTemporary={isTemporary}
            />
            <main
              className={`${
                isTemporary ? 'main--temporaryDrawer' : 'main--permanentDrawer'
              }`}>
              {children}
            </main>
          </Drawer>
        </div>
      </div>
    );
  }
}
