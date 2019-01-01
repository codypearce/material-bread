import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  subtitleOne: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  subtitleTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
});

export default class SubtitleOne extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
  };

  render() {
    const { type } = this.props;
    let textStyle;
    if (type < 1 && type > 2) {
      textStyle = styles.subtitleOne;
    }
    textStyle = numberToStyle(type);

    return (
      <BaseText typographyStyles={textStyle} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}

function numberToStyle(num) {
  const numArray = [styles.subtitleOne, styles.subtitleTwo];
  return numArray[num - 1];
}
