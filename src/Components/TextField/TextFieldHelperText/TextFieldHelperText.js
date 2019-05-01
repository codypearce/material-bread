import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './TextFieldHelperText.styles';

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

export default withTheme(TextFieldHelperText);
