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
    density: PropTypes.number,

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
    density: 0,
    useInputCasing: false,
  };

  _renderText() {
    const {
      text,
      textStyle,
      typeTextColor,
      theme,
      hideLabel,
      useInputCasing,
    } = this.props;

    let modifiedText = text || ' ';
    return (
      <Text
        numberOfLines={1}
        style={[
          theme.buttonText,
          {
            color: hideLabel ? 'transparent' : typeTextColor,
            fontSize: theme.buttonText.fontSize,
            letterSpacing: theme.buttonText.letterSpacing,
          },
          textStyle,
        ]}>
        {useInputCasing ? modifiedText : modifiedText.toUpperCase()}
      </Text>
    );
  }
  _renderLoader() {
    const { loading, typeTextColor, hideLabel } = this.props;

    if (!loading) return null;
    return (
      <ActivityIndicator
        size="small"
        color={typeTextColor}
        style={{
          width: 18,
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
    const { icon, iconPosition, iconSize, typeTextColor, loading } = this.props;

    if (loading) {
      return this._renderLoader();
    }
    if (icon) {
      return React.cloneElement(icon, {
        style: {
          marginRight: iconPosition == 'left' ? 12 : 0,
          marginLeft: iconPosition == 'right' ? 12 : 0,
        },
        size: iconSize || 18,
        color: typeTextColor ? typeTextColor : 'white',
      });
    }
    return null;
  }

  getDensityHeight() {
    const { theme, density } = this.props;
    let densityHeight = theme.button.height;

    if (density <= -1) {
      densityHeight = Math.max(24, densityHeight + 4 * density);
    }
    return densityHeight;
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

    let densityHeight = this.getDensityHeight();
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
            padding: hideLabel ? 18 : 0,
            width: fullWidth ? '100%' : 'auto',
            minWidth: 64,
            height: densityHeight,
            minHeight: densityHeight,
            paddingLeft: iconPosition === 'left' && icon ? 12 : 16,
            paddingRight: iconPosition === 'right' && icon ? 12 : 16,
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
