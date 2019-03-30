import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import styles from '../styles/pages/index.module.css';
import Prism from 'prismjs';
import LogoWithText from '@components/Logo/LogoWithText';

class IndexPage extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <div className="" style={{ marginTop: 40 }}>
          <LogoWithText />
          <h4 className={styles.subtitle}>
            React Native Material Design Components
          </h4>
        </div>
        <div className="row " style={{ marginTop: 40 }}>
          <pre
            style={{
              display: 'inline-block',
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
            }}>
            <code
              style={{
                width: 'auto',
                fontSize: 14,
                backgroundColor: '#272822',
                padding: 12,
                paddingRight: 48,
                borderRadius: 4.8,
                color: 'white',
                textShadow: '0 1px rgba(0, 0, 0, 0.3)',
                fontFamily:
                  "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                position: 'relative',
              }}>
              <span style={{ color: '#66d9ef' }}>$ </span>npm i material-bread
              <button style={{ position: 'absolute', top: 0, right: 0 }}>
                Copy
              </button>
            </code>
          </pre>
        </div>
        <div className="row" style={{ marginTop: 40 }}>
          <Button variant="outlined" color="primary">
            React Native
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: 16, marginRight: 16 }}>
            React
          </Button>

          <Button variant="outlined" color="default">
            Playground
          </Button>
        </div>
      </div>
    );
  }
}

export default IndexPage;
