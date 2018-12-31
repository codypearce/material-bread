import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  default: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default class BaseText extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    typographyStyles: PropTypes.object,
  };

  render() {
    const { style, typographyStyles, children } = this.props;

    return (
      <Text
        style={{
          ...styles.default,
          ...typographyStyles,
          ...style,
        }}
        {...this.props}>
        {children}
      </Text>
    );
  }
}
