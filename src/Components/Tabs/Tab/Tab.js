import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ViewPropTypes, Text } from 'react-native';
import Ripple from '../../Ripple/Ripple.js';
import Icon from '../../Icon/Icon.js';
import withTheme from '../../../Theme/withTheme';
import styles from './Tab.styles';

class Tab extends Component {
  static propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    activeTextColor: PropTypes.string,
    containerStyle: ViewPropTypes.style,
    inActiveTextColor: PropTypes.string,
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
    tabWidth: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.string,
    rippleProps: PropTypes.object,
  };

  static defaultProps = {
    inActiveTextColor: 'rgba(255, 255, 255, 0.7)',
    activeTextColor: '#fff',
    containerStyle: {},
  };

  _renderIcon(color) {
    const { icon, iconStyles } = this.props;
    return <Icon name={icon} size={24} color={color} style={iconStyles} />;
  }

  _renderText(color) {
    const { label, icon, textStyle } = this.props;
    return (
      <Text
        style={[
          styles.text,
          {
            color: color,
            marginTop: icon ? 4 : 0,
          },
          textStyle,
        ]}>
        {label ? label.toUpperCase() : null}
      </Text>
    );
  }

  _renderTab() {
    const {
      label,
      active,
      activeTextColor,
      containerStyle,
      inActiveTextColor,
      icon,
    } = this.props;

    const color = active ? activeTextColor : inActiveTextColor;

    return (
      <View style={[styles.container, containerStyle]}>
        {icon ? this._renderIcon(color) : null}
        {label ? this._renderText(color) : null}
      </View>
    );
  }

  getHeight() {
    const { icon, label } = this.props;
    let height = icon && label ? 72 : 48;

    return height;
  }

  render() {
    const { onPress, tabWidth, rippleProps, style } = this.props;

    return (
      <Ripple
        onPress={onPress}
        style={[{ width: tabWidth, height: this.getHeight() }, style]}
        {...rippleProps}>
        {this._renderTab()}
      </Ripple>
    );
  }
}

export default withTheme(Tab);
