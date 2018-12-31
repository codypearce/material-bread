import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingThree: {
    fontSize: 34,
    lineHeight: 34,
  },
});

export default class HeadingFour extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.headingThree} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
