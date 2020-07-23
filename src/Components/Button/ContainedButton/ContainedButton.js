import React, { Component } from 'react';
import { Animated, Platform } from 'react-native';

import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';

import ButtonBase from '../ButtonBase/ButtonBase';
import { Hoverable } from '../../../';
import color from 'color';

class ContainedButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    color: PropTypes.string,
    textColor: PropTypes.string,
    rippleColor: PropTypes.string,
    theme: PropTypes.object,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    radius: PropTypes.number,
    fullWidth: PropTypes.bool,
  };
  state = {
    stateBackgroundColor: null,
    elevation: new Animated.Value(8),
    animatedShadowRadius: new Animated.Value(4.65),
    animatedShadowOpacity: new Animated.Value(0.27),
    animatedShadowHeight: new Animated.Value(2),
    animatedShadowWidth: new Animated.Value(-1.5),
  };

  animateShadow(active) {
    const animationDuration = active ? 200 : 50;
    if (Platform.OS === 'android') {
      const elevation = active ? 8 : 2;
      Animated.timing(this.state.elevation, {
        useNativeDriver: true,
        toValue: elevation,
        duration: animationDuration,
      });
    } else {
      const {
        animatedShadowRadius,
        animatedShadowOpacity,
        animatedShadowHeight,
        animatedShadowWidth,
      } = this.state;

      const shadowRadius = active ? 6.65 : 4.65;
      const shadowShadowOpacity = active ? 0.27 : 0.35;
      const shadowHeight = active ? 4 : 2;
      const shadowWidth = active ? -1.5 : -0.5;

      Animated.parallel([
        Animated.timing(animatedShadowRadius, {
          toValue: shadowRadius,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedShadowOpacity, {
          toValue: shadowShadowOpacity,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedShadowHeight, {
          toValue: shadowHeight,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedShadowWidth, {
          toValue: shadowWidth,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }

  getShadowStyle() {
    const { theme } = this.props;
    const {
      animatedShadowRadius,
      animatedShadowOpacity,
      animatedShadowHeight,
      animatedShadowWidth,
      elevation,
    } = this.state;

    const style = {
      shadowColor: '#000',
      shadowOffset: {
        width: animatedShadowWidth,
        height: animatedShadowHeight,
      },
      shadowOpacity: animatedShadowOpacity,
      shadowRadius: animatedShadowRadius,
      elevation: elevation,
      backgroundColor: 'transparent',
      borderRadius: theme.button.borderRadius,
    };
    return style;
  }

  getButtonStyles() {
    const { theme } = this.props;

    const buttonStyles = {
      ...theme.containedButton,
      backgroundColor: this.getBackgroundColor(),
    };

    return buttonStyles;
  }

  getBackgroundColor() {
    const { color: userColor, disabled, theme } = this.props;
    const { stateBackgroundColor } = this.state;

    let backgroundColor = userColor ? userColor : theme.primary.main;

    backgroundColor = disabled ? 'rgba(0, 0, 0, 0.12)' : backgroundColor;

    return stateBackgroundColor ? stateBackgroundColor : backgroundColor;
  }

  getRippleColor() {
    const { rippleColor } = this.props;
    const bgColor = this.getBackgroundColor();

    let implementedRippleColor = this.getOverlayColor(bgColor, 0.12, 0.32);

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  getTextColor() {
    const { textColor, disabled } = this.props;

    let implementedTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (textColor) implementedTextColor = textColor;

    return implementedTextColor;
  }

  getOverlayColor(normalColor, lightOverlay, darkOverlay) {
    let modifiedColor;

    if (color(normalColor).isDark()) {
      modifiedColor = color(normalColor)
        .lighten(darkOverlay)
        .rgb()
        .string();
    } else {
      modifiedColor = color(normalColor)
        .darken(lightOverlay)
        .rgb()
        .string();
    }
    return modifiedColor;
  }

  handleHover(toggle) {
    const bgColor = this.getBackgroundColor();
    let implementedColor = toggle
      ? this.getOverlayColor(bgColor, 0.08, 0.08)
      : null;

    this.setState({ stateBackgroundColor: implementedColor });
  }

  handleOnPressIn = (...args) => {
    const { onPressIn } = this.props;
    this.animateShadow(true);

    if (onPressIn) onPressIn(args);
  };
  handleOnPressOut = (...args) => {
    const { onPressOut } = this.props;

    this.animateShadow(false);

    if (onPressOut) onPressOut(args);
  };

  render() {
    const {
      disabled,
      radius,
      theme,
      containerStyle,
      fullWidth,
      ...props
    } = this.props;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}
        style={[containerStyle]}>
        {() => (
          <Animated.View
            useNativeDriver={true}
            style={[
              disabled ? {} : this.getShadowStyle(),
              {
                alignSelf: fullWidth ? 'auto' : 'flex-start',
                borderRadius: radius ? radius : theme.button.borderRadius,
              },
              containerStyle,
            ]}>
            <ButtonBase
              typeRippleColor={this.getRippleColor()}
              typeTextColor={this.getTextColor()}
              typeButtonStyles={this.getButtonStyles()}
              onPressIn={this.handleOnPressIn}
              onPressOut={this.handleOnPressOut}
              disabled={disabled}
              radius={radius}
              theme={theme}
              fullWidth={fullWidth}
              {...props}
            />
          </Animated.View>
        )}
      </Hoverable>
    );
  }
}

export default withTheme(ContainedButton);
