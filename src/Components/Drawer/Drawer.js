import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import withTheme from '../../Theme/withTheme';
import styles from './Drawer.styles';

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

export default withTheme(Drawer);
