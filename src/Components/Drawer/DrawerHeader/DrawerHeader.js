import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './DrawerHeader.styles';

class DrawerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.node,
  };

  _renderAvatar() {
    const { avatar } = this.props;

    return <View style={styles.avatarContainer}>{avatar}</View>;
  }

  render() {
    const { avatar, title, subtitle } = this.props;

    return (
      <View style={styles.drawerHeader}>
        {avatar ? this._renderAvatar() : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  }
}

export default withTheme(DrawerHeader);
