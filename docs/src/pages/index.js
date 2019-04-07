import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import Prism from 'prismjs';
import { LogoWithText, CodeBlock } from '@components';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={{ marginTop: 40 }}>
          <LogoWithText subtitle style={{ width: '100%' }} />
        </div>
        <div style={{ marginTop: 20 }}>
          <CodeBlock
            code={'npm i material-bread'}
            style={styles.code}
            fontSize={16}
          />
        </div>
        <div style={{ marginTop: 20 }}>
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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  code: {},
};

export default Index;
