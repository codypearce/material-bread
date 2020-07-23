import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, I18nManager, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './TextFieldLabel.styles';
import {
  nonOutlinedStops,
  outlinedStops,
  outlinedStopsDense,
} from './TextFieldLabel.constants';

class TextFieldLabel extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.bool,
    labelColor: PropTypes.string,
    focused: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    leadingIcon: PropTypes.bool,
    dense: PropTypes.bool,
    prefix: PropTypes.bool,
    theme: PropTypes.object,
    focusedLabelColor: PropTypes.string,
    onLayout: PropTypes.func,
  };

  state = {
    translateYAnimation: new Animated.Value(
      this.props.type === 'outlined'
        ? outlinedStops.initial
        : nonOutlinedStops.initial,
    ),
    fontSizeAnimation: new Animated.Value(
      this.props.value || this.props.focused ? 1 : 0,
    ),
    animationDuration: 200,
    animationEasing: Easing.ease,
    canAnimate: true,
  };

  componentDidMount() {
    const { type, dense, prefix, value } = this.props;

    if (type == 'outlined' && dense) {
      this.setState({
        translateYAnimation: new Animated.Value(outlinedStopsDense.initial),
      });
    }

    if (prefix) this._handlePrefix();

    if (value) {
      if (type == 'outlined') {
        this._handleLabelOutlinedAnimation();
      } else {
        this._handleLabelAnimation();
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { focused, type, value } = this.props;

    if (focused !== prevProps.focused || value !== prevProps.value) {
      if (type == 'outlined') {
        this._handleLabelOutlinedAnimation();
      } else {
        this._handleLabelAnimation();
      }
    }
  }

  _handlePrefix() {
    const { type, dense } = this.props;
    let translateYAnimation = nonOutlinedStops.active;
    if (type == 'outlined') {
      translateYAnimation = dense
        ? outlinedStopsDense.active
        : outlinedStops.active;
    }

    this.setState({
      canAnimate: false,
      translateYAnimation: new Animated.Value(translateYAnimation),
      fontSizeAnimation: new Animated.Value(1),
    });
  }

  _handleLabelAnimation() {
    const { focused, value } = this.props;
    const {
      translateYAnimation,
      animationEasing,
      animationDuration,
      canAnimate,
      fontSizeAnimation,
    } = this.state;
    if (!canAnimate) return;

    let position =
      focused || value ? nonOutlinedStops.active : nonOutlinedStops.initial;
    const fontVal = focused || value ? 1 : 0;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
        useNativeDriver: true,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: fontVal,
        duration: animationDuration,
        easing: animationEasing,
        useNativeDriver: true,
      }),
    ]).start();
  }

  _handleLabelOutlinedAnimation() {
    const { focused, value, dense } = this.props;
    const {
      translateYAnimation,
      animationEasing,
      animationDuration,
      fontSizeAnimation,
      canAnimate,
    } = this.state;
    if (!canAnimate) return;

    let position =
      focused || value ? outlinedStops.active : outlinedStops.initial;
    const fontVal = focused || value ? 1 : 0;

    if (dense)
      position =
        focused || value
          ? outlinedStopsDense.active
          : outlinedStopsDense.initial;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
        useNativeDriver: true,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: fontVal,
        duration: animationDuration,
        easing: animationEasing,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    let {
      error,
      labelColor,
      label,
      focused,
      type,
      leadingIcon,
      prefix,
      theme,
      style,
      dense,
      focusedLabelColor,
      onLayout,
    } = this.props;
    const { translateYAnimation, fontSizeAnimation } = this.state;

    let translateX = 12;
    if (type === 'flat') {
      translateX = -1;
    } else if (type === 'outlined') {
      translateX = 10;
    }

    if (!labelColor) labelColor = 'rgba(0, 0, 0, 0.54)';

    if (focused) labelColor = focusedLabelColor || theme.primary.main;

    if (error) {
      labelColor = 'red';
      label = 'Error';
    }

    let marginLeft = leadingIcon ? 32 : 0;
    if (type == 'flat' && leadingIcon) {
      marginLeft = 42;
    } else if (type == 'filled' && prefix) {
      marginLeft = 6;
    }

    const baseFontSize =
      (StyleSheet.flatten(style) || {}).fontSize ||
      theme.subtitleOne.fontSize ||
      16;

    const fontStyle = {
      fontSize: fontSizeAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [baseFontSize, baseFontSize * (dense ? 0.65 : 0.75)],
      }),
    };

    return (
      <Animated.View
        useNativeDriver={true}
        style={[
          styles.container,
          {
            marginLeft: marginLeft,
          },
        ]}
        onLayout={e => onLayout && onLayout(e)}
        pointerEvents="none">
        <Animated.Text
          useNativeDriver={true}
          style={[
            styles.label,
            {
              color: labelColor,
              backgroundColor: type == 'outlined' ? 'white' : 'transparent',
              paddingHorizontal: type == 'outlined' ? 4 : 0,
              transform: [
                { translateY: translateYAnimation },
                { translateX: I18nManager.isRTL ? -translateX : translateX },
              ],
            },
            style,
            fontStyle,
          ]}>
          {label}
        </Animated.Text>
      </Animated.View>
    );
  }
}

export default withTheme(TextFieldLabel);
