import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class TextFieldHelperText extends Component {
  static propTypes = {
    error: PropTypes.bool,
    children: PropTypes.node,
    visible: PropTypes.bool,
    style: PropTypes.object,
  };
  render() {
    const { children, visible, error, style } = this.props;

    if (!visible) return null;

    return (
      <Text
        style={[
          styles.helper,
          { color: error ? '#E53935' : 'rgba(0,0,0,0.6)' },
          style,
        ]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  helper: {
    color: 'rgba(0,0,0,0.6)',
    height: 16,
    marginLeft: 12,
    zIndex: 10,
    width: '100%',
    position: 'absolute',
    bottom: -20,
  },
});

export default withTheme(TextFieldHelperText);
