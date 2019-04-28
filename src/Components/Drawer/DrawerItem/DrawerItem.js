import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import Icon from '../../Icon/Icon';
import styles from './DrawerItem.styles';

class DrawerItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    text: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    active: PropTypes.bool,
  };

  render() {
    const { icon, text, onPress, active } = this.props;

    return (
      <Ripple
        style={[
          styles.drawerItem,
          {
            backgroundColor: active ? 'rgba(30, 136, 229, .2)' : 'transparent',
          },
        ]}
        onPress={onPress}
        rippleContainerBorderRadius={4}>
        {icon ? (
          <Icon name={icon} size={20} color={active ? '#1e88e5' : 'grey'} />
        ) : null}
        <Text
          style={[
            styles.text,
            {
              marginLeft: icon ? 24 : 0,
              color: active ? '#1e88e5' : 'rgba(0,0,0,.87)',
            },
          ]}>
          {text}
        </Text>
      </Ripple>
    );
  }
}

export default withTheme(DrawerItem);
