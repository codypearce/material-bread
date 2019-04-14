import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class DialogContentText extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <Text style={styles.title}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 24,
    lineHeight: 24,
    paddingHorizontal: 24,
  },
});

export default withTheme(DialogContentText);
