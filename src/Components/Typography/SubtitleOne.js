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
});

export default class SubtitleOne extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.subtitleOne} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
