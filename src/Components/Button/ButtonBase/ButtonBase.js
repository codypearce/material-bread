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
    iconSize: PropTypes.number,

    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,

    text: PropTypes.string,
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    useInputCasing: PropTypes.bool,

    typeTextColor: PropTypes.string,
    typeButtonStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    typeRippleColor: PropTypes.string,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    testID: PropTypes.string,
  };

  static defaultProps = {
    iconPosition: 'left',
    dense: false,
    useInputCasing: false,
  };

  _renderText() {
    const {
      text,
      textStyle,
      typeTextColor,
      theme,
      hideLabel,
      dense,
      useInputCasing,
    } = this.props;

    let modifiedText = text;
    if (hideLabel) {
      modifiedText = '';
    }
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
        {useInputCasing ? modifiedText : text.toUpperCase()}
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
    const {
      icon,
      iconPosition,
      iconSize,
      typeTextColor,
      loading,
      dense,
    } = this.props;
    if (loading) {
      return this._renderLoader();
    }
    if (icon) {
      return React.cloneElement(icon, {
        style: {
          marginRight: iconPosition == 'left' ? 11 : 0,
          marginLeft: iconPosition == 'right' ? 11 : 0,
        },
        size: iconSize || (dense ? 14 : 18),
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
      testID,
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
            paddingLeft: iconPosition === 'left' && icon ? 17 : 16,
            paddingRight: iconPosition === 'right' && icon ? 17 : 16,
            borderRadius: radius ? radius : theme.button.borderRadius,
          },
          typeButtonStyles,
          style,
        ]}
        testID={testID}
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
