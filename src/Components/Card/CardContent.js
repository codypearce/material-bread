import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

class CardMedia extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;
    return <View style={{ ...styles.container, ...style }}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default withTheme(CardMedia);
