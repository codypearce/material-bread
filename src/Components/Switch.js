import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../Theme/withTheme';
import Ripple from '../Abstract/Ripple';
import shadow from '../Abstract/shadow';

class Switch extends Component {
  static propTypes = { active: PropTypes.bool };

  static defaultProps = {};

  state = {
    thumbTranslateX: new Animated.Value(0),
    isActive: false,
  };

  handleSwitch() {
    const { thumbTranslateX, isActive } = this.state;
    let xValue = 18;
    if (isActive) {
      xValue = 0;
    }
    this.setState({ isActive: !isActive });
    Animated.parallel([
      Animated.timing(thumbTranslateX, {
        toValue: xValue,
        duration: 300,
      }),
    ]).start();
  }

  render() {
    const { thumbTranslateX, isActive } = this.state;

    return (
      <Animated.View
        style={[
          styles.track,
          {
            backgroundColor: isActive
              ? 'rgba(30, 136, 229, .54)'
              : 'rgba(0,0,0,.38)',
          },
        ]}
        onPress={() => this.handleSwitch()}>
        <Ripple
          rippleContainerBorderRadius={100}
          style={[
            styles.thumbRipple,
            { transform: [{ translateX: thumbTranslateX }] },
          ]}
          onPress={() => this.handleSwitch()}>
          <Animated.View
            style={[
              styles.thumb,
              { backgroundColor: isActive ? '#1e88e5' : 'white' },
            ]}
          />
        </Ripple>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  track: {
    width: 36,
    height: 14,
    backgroundColor: 'rgba(0,0,0,.38)',
    borderRadius: 10,
    position: 'relative',
  },
  thumbRipple: {
    width: 32,
    height: 32,
    borderRadius: 100,
    position: 'absolute',
    top: -9,
    left: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: 20,
    height: 20,
    ...shadow(3),
    borderRadius: 100,
  },
});

export default withTheme(Switch);
