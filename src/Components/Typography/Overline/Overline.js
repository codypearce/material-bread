import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseText from '../BaseText/BaseText';
import withTheme from '../../../Theme/withTheme';

class Overline extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    text: PropTypes.string,
  };

  render() {
    const { theme, children, text } = this.props;
    return (
      <BaseText typographyStyles={theme.overline} {...this.props}>
        {children ? children : text}
      </BaseText>
    );
  }
}

export default withTheme(Overline);
