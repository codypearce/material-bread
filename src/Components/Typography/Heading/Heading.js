import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseText from '../BaseText/BaseText';
import withTheme from '../../../Theme/withTheme';

class Heading extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
    theme: PropTypes.object,
    text: PropTypes.string,
  };

  numberToStyle(num) {
    const { theme } = this.props;
    const numArray = [
      theme.headingOne,
      theme.headingTwo,
      theme.headingThree,
      theme.headingFour,
      theme.headingFive,
      theme.headingSix,
    ];
    return numArray[num - 1];
  }

  render() {
    const { type, theme, children, text } = this.props;

    let textStyle;
    if (type < 1 && type > 6) {
      textStyle = theme.headingOne;
    }
    textStyle = this.numberToStyle(type);

    return (
      <BaseText typographyStyles={textStyle} {...this.props}>
        {children ? children : text}
      </BaseText>
    );
  }
}

export default withTheme(Heading);
