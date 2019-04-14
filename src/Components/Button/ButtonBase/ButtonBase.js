import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ActivityIndicator } from 'react-native';
import withTheme from '../../../Theme/withTheme';

import Ripple from '../../Ripple/Ripple';

class ButtonBase extends Component {
  static propTypes = {
    theme: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    children: PropTypes.node,

    type: PropTypes.string,
    onPress: PropTypes.func,

    loading: PropTypes.bool,
    loader: PropTypes.node,
    hideLabel: PropTypes.bool,

    color: PropTypes.string,
    radius: PropTypes.number,

    fullWidth: PropTypes.bool,
    dense: PropTypes.bool,

    icon: PropTypes.node,
    iconPosition: PropTypes.string,

    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,

    text: PropTypes.string,
    textStyle: PropTypes.object,

    typeTextColor: PropTypes.string,
    typeButtonStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    typeRippleColor: PropTypes.string,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
  };

  static defaultProps = {
    iconPosition: 'left',
    dense: false,
  };

  _renderText() {
    const {
      text,
      textStyle,
      typeTextColor,
      theme,
      hideLabel,
      dense,
    } = this.props;

    if (hideLabel) return null;
    return (
      <Text
        numberOfLines={1}
        style={[
          theme.buttonText,
          {
            color: typeTextColor,
            fontSize: dense ? 13 : theme.buttonText.fontSize,
            letterSpacing: dense ? 0.3 : theme.buttonText.letterSpacing,
          },
          textStyle,
        ]}>
        {text.toUpperCase()}
      </Text>
    );
  }
  _renderLoader() {
    const { loading, typeTextColor, hideLabel, dense } = this.props;

    if (!loading) return null;
    return (
      <ActivityIndicator
        size="small"
        color={typeTextColor}
        style={{
          width: dense ? 12 : 16,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          marginRight: hideLabel ? 0 : 8,
        }}
      />
    );
  }
  _renderIcon() {
    const { icon, iconPosition, typeTextColor, loading, dense } = this.props;
    if (loading) {
      return this._renderLoader();
    }
    if (icon) {
      return React.cloneElement(icon, {
        style: {
          marginRight: iconPosition == 'left' ? 8 : 0,
          marginLeft: iconPosition == 'right' ? 8 : 0,
        },
        size: dense ? 14 : 18,
        color: typeTextColor ? typeTextColor : 'white',
      });
    }
    return null;
  }

  render() {
    const {
      disabled,
      disableRipple,
      loading,
      children,
      onPress,
      theme,
      typeButtonStyles,
      fullWidth,
      typeRippleColor,
      dense,
      style,
      onPressIn,
      onPressOut,
      hideLabel,
      radius,
      icon,
      iconPosition,
      ...props
    } = this.props;

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled || disableRipple || loading}
        rippleColor={typeRippleColor}
        rippleContainerBorderRadius={
          radius ? radius : theme.button.borderRadius
        }
        style={[
          theme.button,
          {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: hideLabel ? 'column' : 'row',
            width: fullWidth ? '100%' : 'auto',
            minWidth: dense ? 'auto' : 64,
            height: dense ? 32 : 36,
            minHeight: dense ? 32 : 36,
            paddingLeft: iconPosition === 'left' && icon ? 12 : 16,
            paddingRight: iconPosition === 'right' && icon ? 12 : 16,
            borderRadius: radius ? radius : theme.button.borderRadius,
          },
          typeButtonStyles,
          style,
        ]}
        {...props}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {iconPosition === 'left' ? this._renderIcon() : null}
        {children ? children : this._renderText()}
        {iconPosition === 'right' ? this._renderIcon() : null}
      </Ripple>
    );
  }
}

export default withTheme(ButtonBase);
