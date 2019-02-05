import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Divider from '../Divider';

class DrawerSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    subheader: PropTypes.string,
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
  };

  render() {
    const { children, subheader, topDivider, bottomDivider } = this.props;

    return (
      <View style={styles.drawerSection}>
        {topDivider ? <Divider /> : null}
        {subheader ? <Text>{subheader}</Text> : null}
        <View style={styles.content}>{children}</View>
        {bottomDivider ? <Divider /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 14,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
});

export default withTheme(DrawerSection);
