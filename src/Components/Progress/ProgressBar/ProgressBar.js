import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './ProgressBar.styles';
import { default as colorTool } from 'color';

class ProgressBar extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    trackStyle: PropTypes.object,
    determinate: PropTypes.bool,
    indcatorStartPosition: PropTypes.number,
    easing: PropTypes.func,
    animationDuration: PropTypes.number,
    value: PropTypes.number,
    visible: PropTypes.bool,
    style: PropTypes.object,
    theme: PropTypes.object,
  };

  static defaultProps = {
    animationDuration: 1000,
    indcatorStartPosition: 0,
    easing: Easing.bezier(0.65, 0.815, 0.735, 0.395),
  };

  state = {
    indicatorPosition: new Animated.Value(this.props.indcatorStartPosition),
    indicatorScaleX: new Animated.Value(1),
    indicatorWidth: new Animated.Value(0),
    trackScaleY: new Animated.Value(0),
    trackOpacity: new Animated.Value(0),
    trackHeight: 0,
    trackWidth: 0,
  };

  componentDidMount() {
    const { visible, determinate } = this.props;
    if (visible) {
      this.animateTrackHeight();
    }
    if (determinate) {
      this.startDeterminateAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    const { value, visible, determinate } = this.props;

    if (value != prevProps.value && determinate) {
      this.startDeterminateAnimation();
    }

    if ((visible && !prevProps.visible) || (!visible && prevProps.visible)) {
      this.animateTrackHeight();
    }
  }

  animateTrackHeight() {
    const { trackScaleY, trackOpacity } = this.state;
    const { visible, determinate } = this.props;
    let scale = visible ? 1 : 0;
    let opacity = visible ? 1 : 0;

    Animated.parallel([
      Animated.timing(trackScaleY, {
        toValue: scale,
        duration: 300,
      }),
      Animated.timing(trackOpacity, {
        toValue: opacity,
        duration: 300,
      }),
    ]).start(() => {
      if (determinate) {
        this.startDeterminateAnimation();
      } else {
        this.startIndeterminateAnimation();
      }
    });
  }

  startDeterminateAnimation() {
    const { indicatorWidth, trackWidth } = this.state;
    const { animationDuration, value } = this.props;
    if (trackWidth == 0) {
      setTimeout(() => this.startDeterminateAnimation(), 100);
    }
    Animated.parallel([
      Animated.timing(indicatorWidth, {
        toValue: trackWidth * (value / 100),
        duration: animationDuration,
      }),
    ]).start();
  }

  startIndeterminateAnimation() {
    const { indicatorPosition, indicatorScaleX, trackWidth } = this.state;
    const { animationDuration, easing } = this.props;
    if (trackWidth == 0) {
      setTimeout(() => this.startIndeterminateAnimation(), 100);
    }
    Animated.loop(
      Animated.parallel([
        Animated.timing(indicatorPosition, {
          toValue: trackWidth,
          duration: animationDuration,
          easing,
        }),
        Animated.timing(indicatorScaleX, {
          toValue: 2,
          duration: animationDuration / 4,
          easing,
        }),
      ]),

      {
        iterations: -1,
      },
    ).start();
  }

  onTrackLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      trackWidth: width,
      trackHeight: height,
    });
  };

  render() {
    const { height, color, trackStyle, determinate, theme } = this.props;
    const {
      indicatorPosition,
      indicatorScaleX,
      indicatorWidth,
      trackScaleY,
      trackOpacity,
    } = this.state;

    const trackColor = color
      ? colorTool(color)
          .fade(0.4)
          .string()
      : colorTool(theme.primary.main)
          .fade(0.4)
          .string(); // .6 alpha of indicator
    const indicatorColor = color ? color : theme.primary.main;

    return (
      <Animated.View
        onLayout={this.onTrackLayout}
        style={[
          styles.track,
          {
            backgroundColor: trackColor,
            height: height ? height : 4,
            opacity: trackOpacity,
            transform: [{ scaleY: trackScaleY }],
          },
          trackStyle,
        ]}>
        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: indicatorColor,
              height: height ? height : 4,
              width: determinate ? indicatorWidth : 112,
              transform: [
                { translateX: indicatorPosition },
                { scaleX: indicatorScaleX },
              ],
            },
          ]}
        />
      </Animated.View>
    );
  }
}

export default withTheme(ProgressBar);
