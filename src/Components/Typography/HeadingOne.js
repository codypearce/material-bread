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
});

export default class HeadingOne extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.headingOne} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
