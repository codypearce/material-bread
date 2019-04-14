import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Dropdown from '../Dropdown/Dropdown';

class DrawerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
  };

  _accountSwitcher() {
    return <Dropdown />;
  }

  render() {
    const { image, title, subtitle } = this.props;

    return (
      <View style={styles.drawerHeader}>
        {image ? <Image source={image} /> : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0,0,0,.87)',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 13,
    color: 'rgba(0,0,0,.67)',
  },
});

export default withTheme(DrawerHeader);
