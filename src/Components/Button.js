import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import withTheme from '../Theme/withTheme';

import Ripple from '../Abstract/Ripple';

class Button extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    loading: PropTypes.bool,
    onPress: PropTypes.func,
    textStyle: PropTypes.object,
    textColor: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node,
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool,
    type: PropTypes.string,
  };
  render() {
    const {
      disabled,
      disableRipple,
      loading,
      children,
      onPress,
      style,
      theme,
      textStyle,
      textColor,
      color,
      fullWidth,
      compact,
      type,
      ...props
    } = this.props;

    let buttonType = {};
    let rippleColor = textColor ? textColor : theme.button.color;
    let buttonTextColor = textColor ? textColor : theme.button.color;
    let backgroundColor = color ? color : 'transparent';

    if (type == 'outlined') {
      buttonType = theme.outlinedButton;
      backgroundColor = 'transparent';
    } else if (type == 'contained') {
      buttonType = theme.containedButton;
      buttonTextColor = 'white';
      backgroundColor = '#2196f3';
      rippleColor = 'rgba(255,255,255, .32)';
      if (disabled) {
        backgroundColor = disabled ? 'rgba(0, 0, 0, 0.12)' : backgroundColor;
      }
    }

    if (disabled) {
      buttonTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : buttonTextColor;
    }

    const styles = StyleSheet.create({
      button: {
        ...theme.button,
        ...buttonType,

        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        minWidth: compact ? 'auto' : 64,
        backgroundColor,
        ...style,
      },
      text: {
        ...theme.buttonText,
        color: buttonTextColor,
        ...textStyle,
      },
      icon: {
        width: 16,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
    });

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled || disableRipple || loading}
        rippleColor={rippleColor}
        rippleContainerBorderRadius={theme.button.borderRadius}
        style={styles.button}
        {...props}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={buttonTextColor}
            style={styles.icon}
          />
        ) : (
          <Text numberOfLines={1} style={styles.text}>
            {React.Children.map(children, child =>
              typeof child === 'string' ? child.toUpperCase() : child,
            )}
          </Text>
        )}
      </Ripple>
    );
  }
}

export default withTheme(Button);
