import React, { Component } from 'react';

import Prism from 'prismjs';
import { Logo } from '@components';

import { Button } from '../../../src/index';

import HomeLiveEdit from '../components/HomeLiveEdit/HomeLiveEdit';
import MediaQuery from 'react-responsive';

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
        <div className="home">
          <div className="home__half" />
          <div className="home__half--right" />
          <div className="home__half__content home__half__content--left">
            <div>
              <Logo
                animated
                width={246}
                height={204}
                style={{ margin: '0 auto', width: '100%' }}
              />
              <h1 className="home__title">{'  '}Material Bread</h1>

              <h2 className="home__subtitle">
                React Native Components that work on six platforms
              </h2>
              <div className="home__buttons">
                <a
                  href={'/getting-started/react-native'}
                  style={{ textDecoration: 'none' }}>
                  <Button
                    type={'contained'}
                    text="React Native"
                    color="#E91E63"
                    style={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                  />
                </a>
                <a
                  href={'/getting-started/web'}
                  style={{ textDecoration: 'none' }}>
                  <Button
                    type={'contained'}
                    text="React"
                    color="#009688"
                    style={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                  />
                </a>
                <a
                  href={'/getting-started/electron'}
                  style={{ textDecoration: 'none' }}>
                  <Button
                    type={'contained'}
                    color="#03A9F4"
                    text="Electron"
                    style={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                  />
                </a>
                <a
                  href={'/getting-started/macos'}
                  style={{ textDecoration: 'none' }}>
                  <Button
                    type={'contained'}
                    color="#34495e"
                    text="MacOS"
                    style={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                  />
                </a>
                <a
                  href={'/getting-started/nextjs'}
                  style={{ textDecoration: 'none' }}>
                  <Button
                    type={'contained'}
                    color="#9b59b6"
                    text="NextJS"
                    style={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="home__half__content home__half__content--right">
            <MediaQuery maxWidth={1000}>
              <p
                style={{
                  marginTop: 80,
                  color: 'white',
                  fontSize: 24,
                  textAlign: 'center',
                }}>
                The same components rendered across platforms
              </p>
            </MediaQuery>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
              <MediaQuery maxWidth={1000}>
                {matches =>
                  matches ? (
                    <Button
                      text="iOS"
                      textColor={'white'}
                      textStyle={{
                        fontWeight: preview == 'ios' ? '500' : '400',
                        fontSize: preview == 'ios' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('ios')}
                    />
                  ) : (
                    <Button
                      text="iOS"
                      textColor={'black'}
                      textStyle={{
                        fontWeight: preview == 'ios' ? '500' : '400',
                        fontSize: preview == 'ios' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('ios')}
                    />
                  )
                }
              </MediaQuery>

              <MediaQuery maxWidth={1000}>
                {matches =>
                  matches ? (
                    <Button
                      text="Android"
                      textColor="white"
                      textStyle={{
                        fontWeight: preview == 'android' ? '500' : '400',
                        fontSize: preview == 'android' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('android')}
                    />
                  ) : (
                    <Button
                      text="Android"
                      textColor="black"
                      textStyle={{
                        fontWeight: preview == 'android' ? '500' : '400',
                        fontSize: preview == 'android' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('android')}
                    />
                  )
                }
              </MediaQuery>
              <MediaQuery maxWidth={1000}>
                {matches =>
                  matches ? (
                    <Button
                      text="Web"
                      textColor="white"
                      textStyle={{
                        fontWeight: preview == 'web' ? '500' : '400',
                        fontSize: preview == 'web' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('web')}
                    />
                  ) : (
                    <Button
                      text="Web"
                      textColor="black"
                      textStyle={{
                        fontWeight: preview == 'web' ? '500' : '400',
                        fontSize: preview == 'web' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('web')}
                    />
                  )
                }
              </MediaQuery>
              <MediaQuery maxWidth={1000}>
                {matches =>
                  matches ? (
                    <Button
                      text="Desktop"
                      textColor="white"
                      textStyle={{
                        fontWeight: preview == 'desktop' ? '500' : '400',
                        fontSize: preview == 'desktop' ? 18 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('desktop')}
                    />
                  ) : (
                    <Button
                      text="Desktop"
                      textColor="black"
                      textStyle={{
                        fontWeight: preview == 'desktop' ? '500' : '400',
                        fontSize: preview == 'desktop' ? 17 : 12,
                      }}
                      style={{ width: 120 }}
                      onClick={() => this.changePreview('desktop')}
                    />
                  )
                }
              </MediaQuery>
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
    minHeight: '100vh',
  },
  code: {},
};

export default Index;
