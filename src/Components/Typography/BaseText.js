import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default class BaseText extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    defaultStyle: PropTypes.object,
  };

  render() {
    const { style, defaultStyle, children } = this.props;

    return (
      <Text
        style={{
          ...defaultStyle,
          ...style,
        }}
        {...this.props}>
        {children}
      </Text>
    );
  }
}
