import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  caption: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
});

export default class Caption extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.caption} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
