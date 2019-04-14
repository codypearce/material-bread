import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Dropdown from '../../Dropdown/Dropdown';
import styles from './DrawerHeader.styles';

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

export default withTheme(DrawerHeader);
