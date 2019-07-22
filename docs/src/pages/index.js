import React, { Component } from 'react';

import Prism from 'prismjs';
import { Logo } from '@components';

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
            padding: '0 60px',
            display: 'flex',
            height: '100%',
          }}>
          <div className="home__half" />
          <div className="home__half--right" />
          <div
            className="home__half__content"
            style={{
              marginTop: 56,
              borderRadius: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <div>
              <Logo
                animated
                width={246}
                height={204}
                style={{ marginLeft: 100, marginTop: 80 }}
              />
              <h1
                style={{
                  color: 'white',
                  fontSize: 70,
                  marginBottom: 10,
                  fontWeight: 900,
                  marginTop: 10,
                }}>
                {'  '}Material Bread
              </h1>

              <h2
                style={{
                  // color: '#555',
                  color: 'white',
                  marginBottom: 40,
                  fontWeight: 400,
                  fontSize: 18,
                }}>
                React Native Components that work on six platforms
              </h2>
              <div style={{ display: 'flex' }}>
                <Button
                  type={'contained'}
                  text="React Native"
                  color="#E91E63"
                  containerStyle={{ marginRight: 8 }}
                />
                <Button
                  type={'contained'}
                  text="React"
                  color="#009688"
                  containerStyle={{ marginRight: 8 }}
                />
                <Button type={'contained'} color="#03A9F4" text="Electron" />
              </div>
            </div>
          </div>
          <div
            style={{ width: '100%', margin: 'auto' }}
            className="home__half__content">
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
            <HomeLiveEdit preview={preview} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  code: {},
};

export default Index;
