import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';

class CardContent extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    rippleProps: PropTypes.object,
    onPress: PropTypes.func,
  };

  render() {
    const { children, style, onPress, rippleProps } = this.props;
    if (onPress) {
      return (
        <Ripple
          style={[{ padding: 16 }, style]}
          onPress={onPress}
          {...rippleProps}>
          {children}
        </Ripple>
      );
    }

    return <View style={[{ padding: 16 }, style]}>{children}</View>;
  }
}

export default withTheme(CardContent);
