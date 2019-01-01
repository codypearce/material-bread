import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseText from './BaseText';
import withTheme from '../../Theme/withTheme';
class Caption extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
  };

  render() {
    const { theme } = this.props;
    return (
      <BaseText typographyStyles={theme.caption} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}

export default withTheme(Caption);
