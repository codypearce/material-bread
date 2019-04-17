import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Ripple } from '../../../../src';
import github from '../../assets/github.svg';
import { Appbar } from '../../../../src';
class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    classes: PropTypes.object,
    handleDrawerToggle: PropTypes.func,
    isTemporary: PropTypes.bool,
  };

  render() {
    const { handleDrawerToggle, isTemporary } = this.props;
    let backgroundColor = isTemporary ? '#eee' : 'transparent';

    return (
      <Appbar
        position={'fixed'}
        color={backgroundColor}
        style={{
          boxShadow: 'none',
          zIndex: 10,
        }}
        navigation={
          <IconButton
            color={'#263238'}
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
              <img style={{ width: 28, height: 28 }} src={github} />
            </Ripple>
          </a>,
        ]}
      />
    );
  }
}

export default Header;
