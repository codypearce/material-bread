import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper/Paper';
import Ripple from '../Ripple/Ripple';
import Icon from '../Icon/Icon';

import styles from './Chip.styles';

class Chip extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    theme: PropTypes.object,

    chipStyle: PropTypes.string,

    color: PropTypes.string,
    themeColor: PropTypes.string,
    radius: PropTypes.number,

    onPress: PropTypes.func,
    onDelete: PropTypes.func,
    visible: PropTypes.bool,

    text: PropTypes.string,
    textStyles: PropTypes.object,

    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,

    selected: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
    canDelete: false,
    radius: 16,
  };

  _renderText() {
    const {
      text,
      textStyles,
      leftIcon,
      rightIcon,
      onDelete,
      color,
      themeColor,
      chipStyle,
      theme,
    } = this.props;

    let displayedColor = themeColor || color ? 'white' : 'rgba(0, 0, 0, 0.87)';

    if (chipStyle == 'outlined' && (themeColor || color))
      displayedColor = theme[themeColor || 'primary'].main;

    return (
      <Text
        numberOfLines={1}
        style={[
          styles.text,
          {
            color: displayedColor,
            marginLeft: leftIcon ? 8 : 12,
            marginRight: rightIcon || onDelete ? 8 : 12,
          },
          textStyles,
        ]}>
        {text}
      </Text>
    );
  }

  _renderIcon(icon, position) {
    const { chipStyle } = this.props;

    if (!icon) return null;

    const inner = React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 24,
    });

    let marginRight = chipStyle == 'outlined' ? 8 : 4;
    let marginLeft = chipStyle == 'outlined' ? 8 : 4;
    if (position == 'right') marginLeft = 0;
    if (position == 'left') marginRight = 0;

    return (
      <View
        style={{
          marginRight,
          marginLeft,
        }}>
        {inner}
      </View>
    );
  }

  _renderRightIcon() {
    const { rightIcon, onDelete } = this.props;

    if (onDelete) return this._renderDeleteIcon();
    return this._renderIcon(rightIcon, 'right');
  }

  _renderDeleteIcon() {
    const {
      onDelete,
      disabled,
      themeColor,
      color,
      chipStyle,
      theme,
    } = this.props;
    let iconColor = themeColor || color ? 'white' : '#666666';
    if (chipStyle == 'outlined')
      iconColor = themeColor ? theme[themeColor].main : '#666666';

    return (
      <Ripple
        onPress={onDelete}
        disabled={disabled || !onDelete}
        rippleContainerBorderRadius={100}
        style={{ marginRight: 8 }}>
        <Icon name="cancel" size={18} color={iconColor} />
      </Ripple>
    );
  }

  render() {
    const {
      chipStyle,
      disabled,
      onPress,
      style,
      color,
      themeColor,
      children,
      visible,
      leftIcon,
      theme,
      radius,
    } = this.props;

    let borderWidth = 0;
    let displayBackgroundColor = themeColor
      ? theme[themeColor].main
      : '#e0e0e0';
    let displayBorderColor = themeColor
      ? theme[themeColor].main
      : 'rgba(0, 0, 0, 0.23)';
    let rippleColor = themeColor
      ? theme[themeColor].main
      : 'rgba(0, 0, 0, .87)';

    if (chipStyle === 'outlined') {
      borderWidth = StyleSheet.hairlineWidth;
      displayBackgroundColor = 'transparent';
    }

    if (color) {
      if (chipStyle != 'outlined') displayBackgroundColor = color;
      if (chipStyle == 'outlined') displayBorderColor = color;
      rippleColor = color;
    }

    if (!visible) return null;
    return (
      <Paper
        style={[
          styles.container,
          {
            backgroundColor: displayBackgroundColor,
            borderColor: displayBorderColor,
            borderWidth,
            borderRadius: radius,
          },
          style,
        ]}
        shadow={0}>
        <Ripple
          rippleContainerBorderRadius={radius}
          onPress={onPress}
          disabled={disabled || !onPress}
          style={[styles.ripple, { borderRadius: radius }]}
          rippleColor={rippleColor}>
          <View style={styles.content}>
            {this._renderIcon(leftIcon, 'left')}
            {children ? children : this._renderText()}
            {this._renderRightIcon()}
          </View>
        </Ripple>
      </Paper>
    );
  }
}

export default withTheme(Chip);
