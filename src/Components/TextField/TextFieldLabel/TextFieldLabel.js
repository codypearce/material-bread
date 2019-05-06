import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './TextFieldLabel.styles';

class TextFieldLabel extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.object,
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
    scaleAnimation: new Animated.Value(1),
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
      scaleAnimation: new Animated.Value(0.75),
    });
  }

  _handleLabelAnimation() {
    const { focused, value } = this.props;
    const {
      translateYAnimation,
      scaleAnimation,
      animationEasing,
      animationDuration,
      canAnimate,
    } = this.state;
    if (!canAnimate) return;

    let position = focused || value ? 10 : 20;
    let scale = focused || value ? 0.75 : 1;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(scaleAnimation, {
        toValue: scale,
        duration: animationDuration,
        easing: animationEasing,
      }),
    ]).start();
  }

  _handleLabelOutlinedAnimation() {
    const { focused, value, dense } = this.props;
    const {
      translateYAnimation,
      scaleAnimation,
      animationEasing,
      animationDuration,
      canAnimate,
    } = this.state;
    if (!canAnimate) return;

    let position = focused || value ? -10 : 20;
    let scale = focused || value ? 0.75 : 1;

    if (dense) position = focused || value ? -10 : 11;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(scaleAnimation, {
        toValue: scale,
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
    } = this.props;
    const { translateYAnimation, scaleAnimation } = this.state;

    const translateX = type == 'flat' ? -1 : 11;

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

    return (
      <Animated.Text
        style={[
          styles.label,
          {
            color: labelColor,
            backgroundColor: type == 'outlined' ? 'white' : 'transparent',
            paddingHorizontal: type == 'outlined' ? 4 : 0,
            marginLeft: marginLeft,
            transform: [
              { scale: scaleAnimation },
              { translateY: translateYAnimation },
              { translateX: translateX },
            ],
          },
        ]}>
        {label}
      </Animated.Text>
    );
  }
}

export default withTheme(TextFieldLabel);
