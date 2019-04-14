import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class ListItemText extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    primary: PropTypes.string,
  };
  render() {
    const { primary } = this.props;
    return <Text style={styles.primary}>{primary}</Text>;
  }
}

const styles = StyleSheet.create({
  primary: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14,
    lineHeight: 48,
    fontWeight: '500',
  },
});

export default withTheme(ListItemText);
