import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseText from './BaseText';
import withTheme from '../../Theme/withTheme';

class BodyText extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
    theme: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  render() {
    const { type, theme, style } = this.props;

    const textStyle = type == 2 ? theme.bodyTextTwo : theme.bodyText;
    return (
      <BaseText typographyStyles={textStyle} style={style} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}

export default withTheme(BodyText);
