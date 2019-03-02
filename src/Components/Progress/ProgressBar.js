import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';

class ProgressBar extends PureComponent {
  static defaultProps = {
    animationDuration: 1000,
    size: 40,
    indcatorStartPosition: 0,
    easing: Easing.bezier(0.65, 0.815, 0.735, 0.395),
  };

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
    const { visible } = this.props;
    if (visible) {
      this.animateTrackHeight();
    }
  }

  componentDidUpdate(prevProps) {
    const { value, visible } = this.props;

    if (value != prevProps.value) {
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
    const { height, color, trackStyle, determinate } = this.props;
    const {
      indicatorPosition,
      indicatorScaleX,
      indicatorWidth,
      trackScaleY,
      trackOpacity,
    } = this.state;

    const trackColor = color ? color : 'rgba(66, 165, 245, .6)'; // .6 alpha of indicator
    const indicatorColor = color ? color : 'rgba(66, 165, 245, 1)';

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

const styles = StyleSheet.create({
  track: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  indicator: {},
});

export default withTheme(ProgressBar);
