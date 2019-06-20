import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './TextFieldLabel.styles';

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
  };

  state = {
    translateYAnimation: new Animated.Value(20),
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
      this.setState({ translateYAnimation: new Animated.Value(11) });
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
    const { focused, type } = this.props;
    if (focused !== prevProps.focused) {
      if (type == 'outlined') {
        this._handleLabelOutlinedAnimation();
      } else {
        this._handleLabelAnimation();
      }
    }
  }

  _handlePrefix() {
    const { type } = this.props;
    let translateYAnimation = 10;
    if (type == 'outlined') {
      translateYAnimation = -10;
    }

    this.setState({
      canAnimate: false,
      translateYAnimation: new Animated.Value(translateYAnimation),
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

    let position = focused || value ? 5 : 20;
    const fontVal = focused || value ? 1 : 0;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: fontVal,
        duration: animationDuration,
        easing: animationEasing,
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

    let position = focused || value ? -12 : 20;
    const fontVal = focused || value ? 1 : 0;

    if (dense) position = focused || value ? -10 : 11;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: fontVal,
        duration: animationDuration,
        easing: animationEasing,
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
    } = this.props;
    const { translateYAnimation, fontSizeAnimation } = this.state;

    let translateX = 12;
    if (type === 'flat') {
      translateX = -1;
    } else if (type === 'outlined') {
      translateX = 8;
    }

    if (!labelColor) labelColor = 'rgba(0, 0, 0, 0.54)';

    if (focused) labelColor = theme.primary.main;

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
      StyleSheet.flatten(style).fontSize || theme.subtitleOne.fontSize;
    const fontStyle = {
      fontSize: fontSizeAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [baseFontSize, baseFontSize * 0.75],
      }),
    };

    console.log('TEST', fontStyle);

    return (
      <Animated.View
        style={[
          styles.container,
          {
            marginLeft: marginLeft,
          },
        ]}
        pointerEvents="none">
        <Animated.Text
          style={[
            styles.label,
            {
              color: labelColor,
              backgroundColor: type == 'outlined' ? 'white' : 'transparent',
              transform: [
                { translateY: translateYAnimation },
                { translateX: translateX },
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
