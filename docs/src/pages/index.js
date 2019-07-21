import React, { Component } from 'react';

import Prism from 'prismjs';
import { LogoWithText, PlatformButton } from '@components';
import browser from '../assets/browser.svg';
import iphone from '../assets/iphone.svg';
import imac from '../assets/imac.svg';
import GitHubButton from 'react-github-btn';
import { Button } from '../../../src/index';

import HomeLiveEdit from '../components/HomeLiveEdit/HomeLiveEdit';
class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  state = {
    preview: 'ios',
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
              borderRadius: 2,
              width: '100%',
              minWidth: 600,
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
                borderRadius: 2,
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
          <div style={{ width: '100%', marginTop: 10 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Button
                text="iOS"
                textColor="black"
                textStyle={{
                  fontWeight: preview == 'ios' ? 500 : 400,
                  fontSize: preview == 'ios' ? 20 : 12,
                }}
                style={{ width: 130 }}
                onClick={() => this.changePreview('ios')}
              />

              <Button
                text="Android"
                textColor="black"
                textStyle={{
                  fontWeight: preview == 'android' ? 500 : 400,
                  fontSize: preview == 'android' ? 20 : 12,
                }}
                style={{ width: 130 }}
                onClick={() => this.changePreview('android')}
              />
              <Button
                text="Web"
                textColor="black"
                textStyle={{
                  fontWeight: preview == 'web' ? 500 : 400,
                  fontSize: preview == 'web' ? 20 : 12,
                }}
                style={{ width: 130 }}
                onClick={() => this.changePreview('web')}
              />
              <Button
                text="Desktop"
                textColor="black"
                textStyle={{
                  fontWeight: preview == 'desktop' ? 500 : 400,
                  fontSize: preview == 'desktop' ? 20 : 12,
                }}
                style={{ width: 130 }}
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
