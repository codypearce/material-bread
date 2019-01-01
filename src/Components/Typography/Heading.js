import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingOne: {
    fontWeight: '300',
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: -1.5,
  },
  headingTwo: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 60,
    letterSpacing: -0.5,
  },
  headingThree: {
    fontSize: 48,
    lineHeight: 48,
  },
  headingFour: {
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.25,
  },
  headingFive: {
    fontSize: 24,
    lineHeight: 24,
  },
  headingSix: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
});

export default class Heading extends Component {
  static propTypes = {
    type: PropTypes.number,
    children: PropTypes.node,
  };

  render() {
    const { type } = this.props;

    let textStyle;
    if (type < 1 && type > 6) {
      textStyle = styles.headingOne;
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
  const numArray = [
    styles.headingOne,
    styles.headingTwo,
    styles.headingThree,
    styles.headingFour,
    styles.headingFive,
    styles.headingSix,
  ];
  return numArray[num - 1];
}
