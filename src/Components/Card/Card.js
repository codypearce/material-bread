import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper';
import Ripple from '../Ripple';

class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    outlined: PropTypes.bool,
    shadow: PropTypes.number,
    radius: PropTypes.numbeer,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    radius: 4,
    shadow: 1,
  };

  _renderRipple() {
    const { style, children, onPress, ...rippleProps } = this.props;
    return (
      <Ripple style={[{ flex: 1 }, style]} onPress={onPress} {...rippleProps}>
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
