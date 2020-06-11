import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import styles from './CardContent.styles';

class CardContent extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    rippleProps: PropTypes.object,
    onPress: PropTypes.func,
  };

  render() {
    const { children, style, onPress, rippleProps } = this.props;
    if (onPress) {
      return (
        <Ripple
          style={[{ padding: 40 }, style]}
          onPress={onPress}
          {...rippleProps}>
          {children}
        </Ripple>
      );
    }

    return <View style={[styles.contentContainer, style]}>{children}</View>;
  }
}

export default withTheme(CardContent);
