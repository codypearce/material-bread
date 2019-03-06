import React, { Component } from 'react';
import Prism from 'prismjs';
import Scrollspy from 'react-scrollspy';

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
          style={{ position: 'fixed', right: 80 }}>
          <li>
            <a href="#Example">Example</a>
          </li>
          <li>
            <a href="#Usage">Usage</a>
          </li>
          <li>
            <a href="#Props">Props</a>
          </li>
          <li>
            <a href="#Demos">Demos</a>
          </li>
          <li>
            <a href="#Appbar-with-search">with search</a>
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
              }}>{`import { appbar } from 'material-bread'`}</code>
            <button>Copy</button>
          </pre>
        </div>

        <div style={{ marginTop: 60, height: 400 }} id="Example">
          <h3>Example</h3>
        </div>
        <div style={{ marginTop: 60, height: 400 }} id="Usage">
          {' '}
          <h3>Usage</h3>
        </div>
        <div style={{ marginTop: 60, height: 400 }} id="Props">
          {' '}
          <h3>Props</h3>
        </div>
        <div style={{ marginTop: 60, height: 400 }} id="Demos">
          {' '}
          <h3>Demos</h3>
        </div>
        <div style={{ marginTop: 60, height: 400 }} id="Appbar-with-search">
          {' '}
          <h3>Appbar with search</h3>
        </div>
      </div>
    );
  }
}
