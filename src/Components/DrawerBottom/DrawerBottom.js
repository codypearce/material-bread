import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import { SheetBottom } from '../../';

class DrawerBottom extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };
  render() {
    const { children, ...rest } = this.props;

    return (
      <SheetBottom type={'modal'} {...rest}>
        {children}
      </SheetBottom>
    );
  }
}

export default withTheme(DrawerBottom);
