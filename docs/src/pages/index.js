import React, { Component } from 'react';

import Prism from 'prismjs';
import { LogoWithText, PlatformButton } from '@components';
import browser from '../assets/browser.svg';
import iphone from '../assets/iphone.svg';
import imac from '../assets/imac.svg';
import GitHubButton from 'react-github-btn';
import BrowserCSS from '../components/BrowserCSS';
class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            padding: '0 120px',
            background: '#0097A7',
            display: 'flex',
            marginTop: -6,
            paddingBottom: 40,
          }}>
          <div
            style={{
              marginTop: 40,
              // backgroundColor: 'white',
              borderRadius: 2,
              width: '100%',
              minWidth: 600,
              // boxShadow: '0 3px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.16)',
              // transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
            }}>
            <LogoWithText subtitle width={247} height={204} />
            <h2
              style={{
                color: 'white',
                marginTop: 280,
                fontWeight: 400,
                fontSize: 20,
              }}>
              Choose your platform
            </h2>
            <div
              className="Home__platformRow"
              style={{
                // backgroundColor: 'white',
                borderRadius: 2,

                // width: '100%',
                // justifyContent: 'center',
              }}>
              <PlatformButton
                text="REACT NATIVE"
                img={iphone}
                href={'/getting-started/react-native'}
              />
              <PlatformButton
                text="REACT"
                img={browser}
                href={'/getting-started/web'}
              />
              <PlatformButton
                text="ELECTRON"
                img={imac}
                href={'/getting-started/electron'}
              />
            </div>
          </div>
          <div style={{ width: '100%', marginTop: 40 }}>
            <h2
              style={{
                color: 'white',
                textAlign: 'center',
                marginBottom: 40,
                fontWeight: 400,
                fontSize: 18,
              }}>
              The same components on all Platforms
            </h2>
            <BrowserCSS />
          </div>
          {/* <div style={{ width: '100%', height: 200, background: 'white' }} /> */}

          {/* <GitHubButton
            href="https://github.com/codypearce/material-bread"
            data-size="large"
            data-show-count="true"
            aria-label="Star codypearce/material-bread on GitHub">
            Star
          </GitHubButton> */}
        </div>
        {/* <h2 style={{ textAlign: 'center', marginTop: 70, fontSize: 38 }}>
          Getting Started
        </h2> */}
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
