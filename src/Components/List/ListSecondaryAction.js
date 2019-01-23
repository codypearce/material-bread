import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';

class ListSecondaryAction extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };
  render() {
    const { children } = this.props;
    return <View style={styles.secondaryAction}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  secondaryAction: {
    right: 0,
  },
});

export default withTheme(ListSecondaryAction);
