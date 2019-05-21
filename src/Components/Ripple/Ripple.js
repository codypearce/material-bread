import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styles from './Ripple.styles';
import { radius } from './Ripple.styles';
export default class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,

    rippleColor: 'rgba(0, 0, 0, .87)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    displayUntilPressOut: true,

    onRippleAnimation: (animation, callback) => animation.start(callback),
  };

  static propTypes = {
    ...Animated.View.propTypes,
    ...TouchableWithoutFeedback.propTypes,

    rippleColor: PropTypes.string,
    rippleOpacity: PropTypes.number,
    rippleDuration: PropTypes.number,
    rippleSize: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
    rippleCentered: PropTypes.bool,
    rippleSequential: PropTypes.bool,
    rippleFades: PropTypes.bool,
    disabled: PropTypes.bool,
    displayUntilPressOut: PropTypes.bool,

    onRippleAnimation: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onLayout = this.onLayout.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);

    this.renderRipple = this.renderRipple.bind(this);

    this.unique = 0;
    this.mounted = false;

    this.rippleFades =
      this.props.rippleFades && !this.props.displayUntilPressOut;
    this.isPressingIn = false;
    this.animationWaitingForEnd = false;

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLayout(event) {
    let { width, height } = event.nativeEvent.layout;
    let { onLayout } = this.props;

    if ('function' === typeof onLayout) {
      onLayout(event);
    }

    this.setState({ width, height });
  }

  onPress(event) {
    let { onPress } = this.props;

    if ('function' === typeof onPress) {
      requestAnimationFrame(() => onPress(event));
    }
  }

  onLongPress(event) {
    let { onLongPress, disabled } = this.props;
    if (disabled) return;
    if ('function' === typeof onLongPress) {
      requestAnimationFrame(() => onLongPress(event));
    }

    this.startRipple(event);
  }

  onPressIn(event) {
    const { onPressIn, rippleSequential, disabled } = this.props;
    const { ripples } = this.state;
    if (disabled) return;

    this.isPressingIn = true;

    if (!rippleSequential || !ripples.length) {
      if (onPressIn) {
        onPressIn(event);
      }

      this.startRipple(event);
    }
  }

  onPressOut(event) {
    let { onPressOut } = this.props;

    if ('function' === typeof onPressOut) {
      onPressOut(event);
    }

    this.signalAnimationEnd();
    this.isPressingIn = false;
  }

  onAnimationEnd(event) {
    if (this.props.displayUntilPressOut && this.isPressingIn) {
      this.animationWaitingForEnd = true;
      return;
    }
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd(event);
    }

    this.forceAnimationEnd();
  }

  signalAnimationEnd() {
    if (this.animationWaitingForEnd) {
      this.forceAnimationEnd();
    }
  }

  forceAnimationEnd() {
    if (this.mounted) {
      this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
    }

    this.animationWaitingForEnd = false;
  }

  webGetPositionInElement(e) {
    var rect = e.nativeEvent.target.getBoundingClientRect();
    var x = e.nativeEvent.pageX - rect.left; //x position within the element.
    var y = e.nativeEvent.changedTouches[0].clientY - rect.top; //y position within the element.
    return { x, y };
  }

  startRipple(event) {
    let { width, height } = this.state;
    let {
      rippleDuration,
      rippleCentered,
      rippleSize,
      onRippleAnimation,
    } = this.props;

    let w2 = 0.5 * width;
    let h2 = 0.5 * height;

    let { locationX, locationY } = event.nativeEvent;

    if (Platform.OS === 'web') {
      locationX = this.webGetPositionInElement(event).x;
      locationY = this.webGetPositionInElement(event).y;
    }
    if (rippleCentered) {
      locationX = w2;
      locationY = h2;
    }
    let offsetX = Math.abs(w2 - locationX);
    let offsetY = Math.abs(h2 - locationY);

    let R =
      rippleSize > 0
        ? 0.5 * rippleSize
        : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

    let ripple = {
      unique: this.unique++,
      progress: new Animated.Value(0),
      locationX,
      locationY: locationY,
      R,
    };

    const animation = Animated.timing(ripple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
    });

    onRippleAnimation(animation, this.onAnimationEnd);

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
  }

  renderRipple({ unique, progress, locationX, locationY, R }) {
    let { rippleColor, rippleOpacity } = this.props;
    const rippleFades = this.rippleFades;

    let rippleStyle = {
      top: locationY - radius,
      left: locationX - radius,
      backgroundColor: rippleColor,

      transform: [
        {
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / radius, R / radius],
          }),
        },
      ],

      opacity: rippleFades
        ? progress.interpolate({
            inputRange: [0, 1],
            outputRange: [rippleOpacity, 0],
          })
        : rippleOpacity,
    };

    return <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />;
  }

  render() {
    let { ripples } = this.state;
    let { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
    let {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      rippleContainerBorderRadius,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      panResponder,
      ...props
    } = this.props;

    let touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      onPress,
      onPressIn,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      onPressOut,
      onLongPress: props.onLongPress ? onLongPress : undefined,
      onLayout,
    };

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    };

    return (
      <TouchableWithoutFeedback {...touchableProps} {...panResponder}>
        <Animated.View {...props} pointerEvents="box-only">
          {children}
          <View style={[styles.container, containerStyle]}>
            {ripples.map(this.renderRipple)}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
