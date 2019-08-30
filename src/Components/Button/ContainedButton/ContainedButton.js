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
    elevation: new Animated.Value(6),
    animatedShadowRadius: new Animated.Value(4.65),
    animatedShadowOpacity: new Animated.Value(0.27),
    animatedShadowHeight: new Animated.Value(3),
    animatedShadowWidth: new Animated.Value(1),
  };

  animateShadow(active) {
    const animationDuration = active ? 400 : 150;
    if (Platform.OS === 'android') {
      const elevation = active ? 10 : 6;
      Animated.timing(this.state.elevation, {
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
      const shadowHeight = active ? 5 : 3;
      const shadowWidth = active ? 1.5 : 1;

      Animated.parallel([
        Animated.timing(animatedShadowRadius, {
          toValue: shadowRadius,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowOpacity, {
          toValue: shadowShadowOpacity,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowHeight, {
          toValue: shadowHeight,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowWidth, {
          toValue: shadowWidth,
          duration: animationDuration,
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

    let implementedRippleColor = 'rgba(255, 255,255, 0.56)';

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  getTextColor() {
    const { textColor, disabled } = this.props;

    let implementedTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (textColor) implementedTextColor = textColor;

    return implementedTextColor;
  }

  handleHover(toggle) {
    const bgColor = this.getBackgroundColor();
    let implementedColor;

    if (color(bgColor).isDark()) {
      implementedColor = toggle
        ? color(bgColor)
            .lighten(0.15)
            .rgb()
            .string()
        : null;
    } else {
      implementedColor = toggle
        ? color()
            .darken(0.15)
            .rgb()
            .string()
        : null;
    }
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
        onHoverOut={() => this.handleHover(false)}>
        {() => (
          <Animated.View
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
