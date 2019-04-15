import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { BreadProvider } from '../..';

export default class Container extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    scroll: PropTypes.bool,
  };

  render() {
    const { style, scroll, children } = this.props;
    if (scroll) {
      return (
        <ScrollView>
          <View style={[styles.container, style]}>
            <BreadProvider value={{}}>{children}</BreadProvider>
          </View>
        </ScrollView>
      );
    }
    return (
      <View style={[styles.container, style]}>
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
