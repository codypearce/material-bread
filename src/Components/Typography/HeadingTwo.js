import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingTwo: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 60,
    letterSpacing: -0.5,
  },
});

export default class HeadingTwo extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.headingTwo} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
