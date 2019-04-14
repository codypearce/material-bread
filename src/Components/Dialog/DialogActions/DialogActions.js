import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class DialogActions extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default withTheme(DialogActions);
