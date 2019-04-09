import React, { Component } from 'react';

import Prism from 'prismjs';
import { LogoWithText, CodeBlock } from '@components';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <h1>Contributing</h1>
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
