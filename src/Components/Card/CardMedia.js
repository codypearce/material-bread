import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

class CardMedia extends Component {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.node,
    style: PropTypes.object,
  };

  render() {
    const { image, style } = this.props;
    return <View style={[styles.container, style]}>{image}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 194,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(CardMedia);
