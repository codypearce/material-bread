import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class DrawerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.node,
    theme: PropTypes.object,
  };

  _renderAvatar() {
    const { avatar, theme } = this.props;

    return <View style={theme.drawerHeaderAvatarContainer}>{avatar}</View>;
  }

  render() {
    const { avatar, title, subtitle, style, theme } = this.props;

    return (
      <View style={[theme.drawerHeader, style]}>
        {avatar ? this._renderAvatar() : null}
        <Text style={theme.drawerHeaderTitle}>{title}</Text>
        <Text style={theme.drawerHeaderSubtitle}>{subtitle}</Text>
      </View>
    );
  }
}

export default withTheme(DrawerHeader);
