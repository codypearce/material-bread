import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import BaseText from './BaseText';

const styles = StyleSheet.create({
  headingSix: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
});

export default class HeadingSix extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <BaseText typographyStyles={styles.headingSix} {...this.props}>
        {this.props.children}
      </BaseText>
    );
  }
}
