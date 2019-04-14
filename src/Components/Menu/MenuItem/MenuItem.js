import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
  };
  static defaultProps = {
    disabled: false,
    disabledTextColor: '#BDBDBD',
    underlayColor: '#E0E0E0',
  };

  render() {
    const {
      children,
      disabled,
      onPress,
      style,
      textStyle,
      ...props
    } = this.props;

    return (
      <TouchableHighlight
        {...props}
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, style]}>
        <Text
          ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
          numberOfLines={1}
          style={[styles.title, textStyle]}>
          {children}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    width: '100%',
    minWidth: 124,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
  },
});

export default withTheme(MenuItem);
