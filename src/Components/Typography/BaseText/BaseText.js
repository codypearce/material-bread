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
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    typographyStyles: PropTypes.object,
    align: PropTypes.string,
    color: PropTypes.string,
    gutterBottom: PropTypes.bool,
    theme: PropTypes.object,
  };

  render() {
    const {
      style,
      typographyStyles,
      align,
      color,
      gutterBottom,
      children,
      theme,
      ...props
    } = this.props;

    return (
      <Text
        style={[
          styles.default,
          theme.text,
          typographyStyles,
          {
            textAlign: align ? align : 'left',
            color: color ? color : 'rgba(0,0,0, 87)',
            marginBottom: gutterBottom ? 10 : 0,
          },
          style,
        ]}
        {...props}>
        {children}
      </Text>
    );
  }
}
