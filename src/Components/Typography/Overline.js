import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  overline: {
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});

export default class Overline extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.overline} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
