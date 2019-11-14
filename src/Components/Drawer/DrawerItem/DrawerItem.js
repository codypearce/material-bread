import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import Icon from '../../Icon/Icon';

class DrawerItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    text: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    active: PropTypes.bool,
    iconComponent: PropTypes.func,
    theme: PropTypes.object,
  };

  render() {
    const { icon, text, onPress, active, iconComponent, theme } = this.props;

    return (
      <Ripple
        style={[
          theme.drawerItem,
          {
            backgroundColor: active
              ? theme.drawerItemActive.backgroundColor
              : theme.drawerItem.backgroundColor,
          },
        ]}
        onPress={onPress}
        rippleContainerBorderRadius={4}>
        {icon ? (
          <Icon
            name={icon}
            size={theme.drawerItemIcon.size}
            color={
              active ? theme.drawerItemActive.color : theme.drawerItemIcon.color
            }
            iconComponent={iconComponent}
          />
        ) : null}
        <Text
          style={[
            theme.drawerItemText,
            {
              marginLeft: icon ? 24 : 0,
              color: active
                ? theme.drawerItemActive.color
                : theme.drawerItemText.color,
            },
          ]}>
          {text}
        </Text>
      </Ripple>
    );
  }
}

export default withTheme(DrawerItem);
