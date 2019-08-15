import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default class BaseText extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    typographyStyles: PropTypes.object,
    align: PropTypes.string,
    color: PropTypes.string,
    gutterBottom: PropTypes.bool,
    theme: PropTypes.object,
    themeColor: PropTypes.string,
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
      themeColor = 'primary',
      ...props
    } = this.props;

    return (
      <Text
        style={[
          theme.text,
          typographyStyles,
          {
            textAlign: align ? align : 'left',
            color: color ? color : theme.textColor[themeColor],
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
