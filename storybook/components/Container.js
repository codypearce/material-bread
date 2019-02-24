import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { BreadProvider } from '../../src/index';

export default class Container extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
  };

  render() {
    const { style, children } = this.props;
    return (
      <View style={{ ...styles.container, ...style }}>
        <BreadProvider value={{}}>{children}</BreadProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
