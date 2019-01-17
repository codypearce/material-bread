import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, Platform } from 'react-native';
import withTheme from '../Theme/withTheme';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    disabledTextColor: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    underlayColor: PropTypes.string,
    content: PropTypes.node,
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
      disabledTextColor,
      onPress,
      style,
      textStyle,
      underlayColor,
      ...props
    } = this.props;

    return (
      <TouchableHighlight
        {...props}
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, style]}
        underlayColor={underlayColor}>
        <Text
          ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
          numberOfLines={1}
          style={[
            styles.title,
            disabled && { color: disabledTextColor },
            textStyle,
          ]}>
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
