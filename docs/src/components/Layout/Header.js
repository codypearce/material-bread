import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '../../../../src';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Github from '../Icons/Github';

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
    let backgroundColor = isTemporary ? '' : 'transparent';

    return (
      <AppBar
        color="default"
        style={{
          backgroundColor,
          boxShadow: 'none',
        }}>
        <Toolbar>
          <IconButton
            color={'263238'}
            size={28}
            name={'menu'}
            onPress={handleDrawerToggle}
          />
          <div style={{ flexGrow: 1 }} />
          <Github />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
