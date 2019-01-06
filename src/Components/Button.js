import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
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
    theme: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node,
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool,
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
      fullWidth,
      compact,
    } = this.props;

    let buttonTextColor = textColor ? textColor : theme.button.color;
    buttonTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : buttonTextColor;

    const rippleColor = textColor ? textColor : theme.button.color;
    const styles = StyleSheet.create({
      button: {
        ...theme.button,
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        minWidth: compact ? 'auto' : 64,
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
        style={styles.button}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={textColor}
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
