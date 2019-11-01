import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './DrawerHeader.styles';

class DrawerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    subtitle: PropTypes.string,
    subtitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    avatar: PropTypes.node,
  };

  _renderAvatar() {
    const { avatar } = this.props;

    return <View style={styles.avatarContainer}>{avatar}</View>;
  }

  render() {
    const {
      avatar,
      title,
      subtitle,
      style,
      titleStyle,
      subtitleStyle,
    } = this.props;

    return (
      <View style={[styles.drawerHeader, style]}>
        {avatar ? this._renderAvatar() : null}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      </View>
    );
  }
}

export default withTheme(DrawerHeader);
