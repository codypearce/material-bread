import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import withTheme from '../Theme/withTheme';

class Badge extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.number,
    textColor: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    text: PropTypes.string,
  };
  render() {
    const {
      size,
      textColor,
      backgroundColor,
      style,
      theme,
      children,
      ...rest
    } = this.props;
    const realSize = size ? size : 16;

    return (
      <View
        style={{
          height: realSize,
          width: realSize,
          borderRadius: realSize,
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.base.primary,
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        numberOfLines={1}
        {...rest}>
        <Text
          style={{
            fontSize: realSize * 0.5,
            color: textColor ? textColor : 'white',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {children}
        </Text>
      </View>
    );
  }
}

export default withTheme(Badge);
