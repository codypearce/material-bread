import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class ProgressCircleDeterminate extends Component {
  static propTypes = {
    value: PropTypes.number,
    size: PropTypes.number,
    thickness: PropTypes.number,
    color: PropTypes.string,
    unfilledColor: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    animationMethod: PropTypes.string,
    animationConfig: PropTypes.object,
    shouldAnimateFirstValue: PropTypes.bool,
    onChange: PropTypes.func,
    onChangeAnimationEnd: PropTypes.func,
    noTrackColor: PropTypes.bool,
  };

  static defaultProps = {
    value: 0,
    size: 64,
    thickness: 4,
    color: '#4c90ff',
    unfilledColor: 'transparent',
    noTrackColor: true,
    style: {},
    children: null,
    animationMethod: null,
    animationConfig: { duration: 200 },
    shouldAnimateFirstValue: false,
    onChange() {},
    onChangeAnimationEnd() {},
  };

  state = {
    animatedValue:
      this.props.value.constructor.name === 'AnimatedValue'
        ? null
        : new Animated.Value(
            this.props.shouldAnimateFirstValue ? 0 : this.props.value,
          ),
  };

  componentDidMount() {
    const { shouldAnimateFirstValue, value } = this.props;

    if (shouldAnimateFirstValue) this.animateChange(value);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value != prevProps.value) {
      this.handleChange(value);
    }
  }

  getFullCircleStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      borderRadius: this.props.size / 2,
    };
  }

  getHalfCircleContainerStyle() {
    return {
      width: this.props.size / 2,
      height: this.props.size,
      overflow: 'hidden',
    };
  }

  ANIMATION_TYPES = ['timing', 'spring', 'bounce', 'decay'];

  getAnimationMethod() {
    return this.ANIMATION_TYPES.includes(this.props.animationMethod)
      ? this.props.animationMethod
      : null;
  }

  handleChange = (value = this.props.value) => {
    this.props.onChange();
    if (value.constructor.name === 'AnimatedValue') {
      return;
    }

    if (this.getAnimationMethod()) {
      this.animateChange(value);
    } else {
      this.state.animatedValue.setValue(value);
    }
  };

  animateChange = value =>
    Animated[this.getAnimationMethod()](this.state.animatedValue, {
      toValue: value / 100,
      useNativeDriver: true,
      ...this.props.animationConfig,
    }).start(this.props.onChangeAnimationEnd);

  renderHalfCircle = ({ isFlipped = false } = {}) => {
    const { size, color, thickness, value } = this.props;
    const valueToInterpolate =
      value.constructor.name === 'AnimatedValue'
        ? value
        : this.state.animatedValue;

    return (
      <View
        pointerEvents="none"
        style={[
          this.getHalfCircleContainerStyle(),
          { transform: [{ scaleX: isFlipped ? -1 : 1 }] },
        ]}>
        <Animated.View
          style={{
            width: size,
            height: size,
            transform: [
              {
                rotate: valueToInterpolate.interpolate({
                  inputRange: isFlipped ? [0, 0.5] : [0.5, 1],
                  outputRange: isFlipped
                    ? ['180deg', '0deg']
                    : ['-180deg', '0deg'],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <View style={this.getHalfCircleContainerStyle()}>
            <View
              style={[
                this.getFullCircleStyle(),
                { borderWidth: thickness, borderColor: color },
              ]}
            />
          </View>
        </Animated.View>
      </View>
    );
  };

  render() {
    const {
      thickness,
      unfilledColor,
      children,
      style,
      noTrackColor,
    } = this.props;

    return (
      <View style={[this.getFullCircleStyle(), styles.mainContainer, style]}>
        <View
          pointerEvents="box-none"
          style={[
            this.getFullCircleStyle(),
            {
              borderWidth: noTrackColor ? 0 : thickness,
              borderColor: unfilledColor,
            },
            styles.innerCircleContainer,
          ]}>
          {children}
        </View>
        {this.renderHalfCircle()}
        {this.renderHalfCircle({ isFlipped: true })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  innerCircleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(ProgressCircleDeterminate);
