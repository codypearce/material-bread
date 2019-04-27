import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper/Paper';
import Ripple from '../Ripple/Ripple';

class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    outlined: PropTypes.bool,
    shadow: PropTypes.number,
    radius: PropTypes.number,
    onPress: PropTypes.func,
    rippleProps: PropTypes.object,
  };

  static defaultProps = {
    radius: 4,
    shadow: 1,
  };

  _renderRipple() {
    const { children, onPress, rippleProps } = this.props;
    return (
      <Ripple style={[{ flex: 1 }]} onPress={onPress} {...rippleProps}>
        {children}
      </Ripple>
    );
  }

  render() {
    const { style, outlined, radius, onPress, shadow, children } = this.props;
    return (
      <Paper
        shadow={shadow}
        radius={radius}
        style={[
          style,
          {
            borderWidth: outlined ? StyleSheet.hairlineWidth : 0,
            borderBottomColor: 'rgba(0,0,0,.4)',
          },
        ]}>
        {onPress ? this._renderRipple() : children}
      </Paper>
    );
  }
}

export default withTheme(Card);
