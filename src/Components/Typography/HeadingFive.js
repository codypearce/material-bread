import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingFive: {
    fontSize: 24,
    lineHeight: 24,
  },
});

export default class HeadingFive extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.headingFive} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
