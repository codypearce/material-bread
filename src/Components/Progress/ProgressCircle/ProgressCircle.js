import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated, Easing } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import ProgressCircleDeterminate from './ProgressCircleDeterminate';

class ProgressCircle extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.func,
    visible: PropTypes.bool,
    determinate: PropTypes.bool,
    widthOfBorder: PropTypes.number,
    testID: PropTypes.string,
  };

  static defaultProps = {
    color: 'rgb(0, 0, 0)',
    size: 48,
    animationEasing: Easing.linear,
    animationDuration: 2400,
    visible: true,
    determinate: false,
    widthOfBorder: 10,
  };

  constructor(props) {
    super(props);
  }

  state = {
    frames: (60 * this.props.animationDuration) / 1000,
    progress: new Animated.Value(0),
  };

  componentDidMount() {
    const { visible, determinate } = this.props;

    if (visible && !determinate) {
      this.startIndeterminateAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    const { visible, determinate } = this.props;

    if ((visible && !prevProps.visible) || (!visible && prevProps.visible)) {
      if (determinate) this.startIndeterminateAnimation();
    }
  }

  startIndeterminateAnimation() {
    const { progress } = this.state;
    const { animationEasing, animationDuration } = this.props;

    Animated.loop(
      Animated.timing(progress, {
        duration: animationDuration,
        easing: animationEasing,
        toValue: 1,
        useNativeDriver: true,
      }),

      {
        iterations: -1,
      },
    ).start();
  }

  stopAnimation() {
    this.state.progress.stopAnimation();
  }

  getLayerStyle() {
    const { size } = this.props;
    const { progress } = this.state;

    const inputRange = [0, 1];
    const outputRange = [0 + 30 + 15 + 'deg', 2 * 360 + 30 + 15 + 'deg'];

    const rotate = {
      rotate: progress.interpolate({
        inputRange,
        outputRange,
      }),
    };

    return {
      width: size,
      height: size,
      transform: [rotate],
    };
  }

  getViewportStyle() {
    const { size } = this.props;
    const { progress } = this.state;

    const rotate = {
      rotate: progress.interpolate({
        inputRange: this.getInputRange(progress),
        outputRange: this.getOutputRange(progress),
      }),
    };

    return {
      width: size,
      height: size,
      transform: [rotate],
    };
  }

  getInputRange() {
    const { frames } = this.state;
    const inputRange = Array.from(
      new Array(frames),
      (undefined, frameIndex) => frameIndex / (frames - 1),
    );

    return inputRange;
  }

  getOutputRange() {
    const easing = Easing.bezier(0.4, 0.0, 0.7, 1.0);
    const { frames } = this.state;

    const outputRange = Array.from(
      new Array(frames),
      (undefined, frameIndex) => {
        let progress = (2 * frameIndex) / (frames - 1);
        const rotation = -(180 - 15);

        if (progress > 1.0) {
          progress = 2.0 - progress;
        }

        const direction = +1;

        return direction * (180 - 30) * easing(progress) + rotation + 'deg';
      },
    );

    return outputRange;
  }

  render() {
    const {
      style,
      size,
      color,
      determinate,
      widthOfBorder,
      testID,
    } = this.props;

    const layerStyle = this.getLayerStyle();

    const viewportStyle = this.getViewportStyle();

    const containerStyle = {
      width: size,
      height: size / 2,
      overflow: 'hidden',
    };

    const lineStyle = {
      width: size,
      height: size,
      borderColor: color,
      borderWidth: size / widthOfBorder,
      borderRadius: size / 2,
    };

    if (determinate) return <ProgressCircleDeterminate {...this.props} />;

    return (
      <View style={style} testID={testID}>
        <Animated.View style={layerStyle} useNativeDriver={true}>
          <Animated.View
            style={containerStyle}
            collapsable={false}
            useNativeDriver={true}>
            <Animated.View style={viewportStyle} useNativeDriver={true}>
              <Animated.View
                style={containerStyle}
                collapsable={false}
                useNativeDriver={true}>
                <Animated.View style={lineStyle} useNativeDriver={true} />
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default withTheme(ProgressCircle);
