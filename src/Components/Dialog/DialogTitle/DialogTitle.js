import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class DialogTitle extends Component {
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
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
});

export default withTheme(DialogTitle);
