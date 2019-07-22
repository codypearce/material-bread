import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Ripple } from '../../../../src';
import github from '../../assets/github.svg';
import githubWhite from '../../assets/github--white.svg';
import { Appbar } from '../../../../src';
import MediaQuery from 'react-responsive';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    classes: PropTypes.object,
    handleDrawerToggle: PropTypes.func,
    isTemporary: PropTypes.bool,
  };

  state = {
    backgroundOverride: false,
  };

  componentDidMount() {
    const location = window && window.location;
    const pathName = location.pathname;
    if (pathName == '/') {
      this.setState({ backgroundOverride: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const location = window && window.location;
    const pathName = location.pathname;

    if (!prevState.backgroundOverride && pathName == '/') {
      this.setState({ backgroundOverride: true });
    } else if (prevState.backgroundOverride && pathName !== '/') {
      this.setState({ backgroundOverride: false });
    }
  }

  render() {
    const { handleDrawerToggle, isTemporary } = this.props;
    const { backgroundOverride } = this.state;

    let backgroundColor = isTemporary ? '#eee' : 'transparent';
    backgroundColor = backgroundOverride ? 'transparent' : backgroundColor;

    return (
      <div>
        <Appbar
          position={'fixed'}
          color={backgroundColor}
          style={{
            boxShadow: 'none',
            zIndex: 10,
          }}
          navigation={
            <IconButton
              color={backgroundOverride ? 'white' : '#263238'}
              size={28}
              name={'menu'}
              onPress={handleDrawerToggle}
            />
          }
          actionItems={[
            <a
              key={1}
              href={'https://github.com/codypearce/material-bread'}
              style={{ color: 'black' }}>
              <Ripple
                rippleContainerBorderRadius={100}
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MediaQuery maxWidth={1000}>
                  {backgroundOverride && (
                    <img style={{ width: 28, height: 28 }} src={githubWhite} />
                  )}
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                  {backgroundOverride && (
                    <img style={{ width: 28, height: 28 }} src={github} />
                  )}
                </MediaQuery>
              </Ripple>
            </a>,
          ]}
        />
      </div>
    );
  }
}

export default Header;
