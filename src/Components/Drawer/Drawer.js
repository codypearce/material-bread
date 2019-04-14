import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Utils/Shadow/shadow';

class Drawer extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    containerStyle: PropTypes.object,
  };

  render() {
    const {
      children,
      style,
      contentContainerStyle,
      containerStyle,
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <ScrollView contentContainerStyle={contentContainerStyle} style={style}>
          {children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...shadow(8),
  },
});

export default withTheme(Drawer);
