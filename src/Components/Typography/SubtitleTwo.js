import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  subtitleTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
});

export default class SubtitleTwo extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.subtitleTwo} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
