import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';
import withTheme from '../../Theme/withTheme';

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  bodyTextTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.25,
  },
});

class BodyText extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
  };

  render() {
    const { type } = this.props;
    const textStyle = type == 2 ? styles.bodyTextTwo : styles.bodyText;

    return (
      <BaseText typographyStyles={textStyle} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}

export default withTheme(BodyText);
