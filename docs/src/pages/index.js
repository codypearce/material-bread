import React, { Component } from 'react';

import Prism from 'prismjs';
import { LiveEdit, LogoWithText, PlatformButton } from '@components';
import browser from '../assets/browser.svg';
import iphone from '../assets/iphone.svg';
import imac from '../assets/imac.svg';
import GitHubButton from 'react-github-btn';
import BrowserCSS from '../components/BrowserCSS';
import { Button } from '../../../src/index';

import HomeLiveEdit from '../components/HomeLiveEdit/HomeLiveEdit';
class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  state = {
    preview: 'web',
  };

  changePreview(preview) {
    this.setState({ preview });
  }

  render() {
    const { preview } = this.state;
    return (
      <div style={styles.container}>
        <div
          style={{
            padding: '0 120px',
            background: '#0097A7',
            display: 'flex',
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

                marginBottom: 40,
                fontWeight: 400,
                fontSize: 18,
              }}>
              React Native Components that work on all Platforms
            </h2>
            <h2
              style={{
                color: 'white',

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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Button
                text="Web"
                type="outlined"
                textColor="white"
                onClick={() => this.changePreview('web')}
              />
              <Button
                text="iOS"
                type="outlined"
                textColor="white"
                onClick={() => this.changePreview('ios')}
              />
              <Button
                text="Android"
                type="outlined"
                textColor="white"
                onClick={() => this.changePreview('android')}
              />
              <Button
                text="Desktop"
                type="outlined"
                textColor="white"
                onClick={() => this.changePreview('desktop')}
              />
            </div>
            <HomeLiveEdit
              code={`<Button text="Button" type="outlined"/>`}
              scope={{ Button }}
              preview={preview}
              // noInline={true}
              // livePreviewBackground={livePreviewBackground}
            />
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
  },
  code: {},
};

export default Index;
