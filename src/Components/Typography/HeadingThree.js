import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingThree: {
    fontSize: 48,
    lineHeight: 60,
  },
});

export default class HeadingThree extends Component {
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
