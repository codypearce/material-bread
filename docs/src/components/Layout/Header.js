import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { IconButton, Ripple } from '../../../../src';

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
        navigationIcon={
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
              <Image
                style={{ width: 28, height: 28 }}
                source={{
                  uri:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                }}
              />
            </Ripple>
          </a>,
        ]}
      />
    );
  }
}

export default Header;
