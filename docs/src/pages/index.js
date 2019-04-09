import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import Prism from 'prismjs';
import { LogoWithText, CodeBlock, PlatformButton } from '@components';
import browser from '../assets/browser.svg';
import iphone from '../assets/iphone.svg';
import imac from '../assets/imac.svg';
import { Ripple, Hoverable } from '../../../src';

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
        {/* <div style={{ marginTop: 20 }}>
          <CodeBlock
            code={'npm i material-bread'}
            style={styles.code}
            fontSize={16}
          />
        </div> */}
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}>
          <PlatformButton text="REACT NATIVE" img={iphone} />
          <PlatformButton text="REACT" img={browser} />
          <PlatformButton text="ELECTRON" img={imac} />
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
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
