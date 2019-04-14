import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../Ripple/Ripple';
import styles from './Switch.styles';

class Switch extends Component {
  static propTypes = { active: PropTypes.bool, style: PropTypes.object };

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

export default withTheme(Switch);
