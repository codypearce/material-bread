import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseText from './BaseText';
import withTheme from '../../Theme/withTheme';

class Subtitle extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
    theme: PropTypes.object,
  };

  numberToStyle(num) {
    const { theme } = this.props;
    const numArray = [theme.subtitleOne, theme.subtitleTwo];
    return numArray[num - 1];
  }

  render() {
    const { type, theme } = this.props;
    let textStyle;
    if (type < 1 && type > 2) {
      textStyle = theme.subtitleOne;
    }
    textStyle = this.numberToStyle(type);

    return (
      <BaseText typographyStyles={textStyle} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}

export default withTheme(Subtitle);
