import React, { Component } from 'react';
import Prism from 'prismjs';
import Scrollspy from 'react-scrollspy';

import { Appbar, Data } from '../../../../src/index';

export default class AppbarPage extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <Scrollspy
          items={['Example', 'Usage', 'Props', 'Demos', 'Appbar-with-search']}
          currentClassName="is-current"
          style={{ position: 'fixed', right: 50 }}>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Example">
              Example
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Usage">
              Usage
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Props">
              Props
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Demos">
              Demos
            </a>
          </li>
          <li className="SideMenu__ListItem SideMenu__ListItem--sub">
            <a className="SideMenu__Link " href="#Appbar-with-search">
              with search
            </a>
          </li>
        </Scrollspy>
        <h1 style={{ fontSize: 42, letterSpacing: 1.2, marginBottom: 0 }}>
          Appbar top
        </h1>
        <p style={{ color: 'rgba(0, 0, 0, 0.57)', marginTop: 16 }}>
          The top app bar displays information and actions relating to the
          current screen.{' - '}
          <a
            href="https://material.io/design/components/app-bars-top.html#"
            style={{ textDecoration: 'none' }}>
            Material Docs
          </a>
        </p>
        <div className="row " style={{ marginTop: 32 }}>
          <pre
            style={{
              padding: 12,
            }}>
            <code
              className="language-javascript"
              style={{
                fontSize: 14,
              }}>{`import { Appbar } from 'material-bread'`}</code>
            <button>Copy</button>
          </pre>
        </div>

        <div style={{ marginTop: 60 }} id="Example">
          <h3>Example</h3>
          <Appbar title={'Page Title'} />
        </div>
        <div style={{ marginTop: 60 }} id="Usage">
          <h3>Usage</h3>
          <div className="row " style={{}}>
            <pre style={{ width: '100%' }}>
              <code
                className="language-javascript"
                style={{
                  fontSize: 14,
                }}>{`import react  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>

    );
  }
}`}</code>
              <button>Copy</button>
            </pre>
          </div>
        </div>
        <div style={{ marginTop: 60 }} id="Props">
          <h3>Props</h3>
        </div>
        <div style={{ marginTop: 60 }} id="Demos">
          <h3>Demos</h3>
        </div>
        <div style={{ marginTop: 60 }} id="Appbar-with-search">
          <h3>Appbar with search</h3>
        </div>
        <div style={{ marginTop: 60 }} id="Full">
          <h3>Full Example</h3>
        </div>
      </div>
    );
  }
}
