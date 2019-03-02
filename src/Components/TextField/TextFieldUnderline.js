import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, Easing } from 'react-native';
import withTheme from '../../Theme/withTheme';

class TextFieldUnderline extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.object,
    error: PropTypes.bool,
    underlineColor: PropTypes.string,
    underlineActiveColor: PropTypes.string,
    focused: PropTypes.bool,
  };

  state = {
    underLineXAnimation: new Animated.Value(0),
    animationDuration: 200,
    animationEasing: Easing.bounce,
  };

  componentDidUpdate(prevProps) {
    const { focused, error } = this.props;
    if (focused !== prevProps.focused && !error) {
      this._handleUnderlineAnimation();
    }
  }

  _handleUnderlineAnimation() {
    const { focused } = this.props;
    const {
      underLineXAnimation,
      animationEasing,
      animationDuration,
    } = this.state;

    let value = focused ? 1 : 0;

    Animated.timing(underLineXAnimation, {
      toValue: value,
      duration: animationDuration,
      easing: animationEasing,
    }).start();
  }

  render() {
    let { error, underlineColor, underlineActiveColor } = this.props;
    const { underLineXAnimation } = this.state;

    let baseUnderlineScale = 0.5;

    if (!underlineColor) underlineColor = 'rgba(0, 0, 0, 0.42)';
    if (!underlineActiveColor) underlineActiveColor = 'rgba(33, 150, 243, 1)';

    if (error) {
      underlineColor = 'red';
      baseUnderlineScale = 1;
    }

    return (
      <Animated.View
        style={[
          styles.underline,
          {
            backgroundColor: underlineColor,
            transform: [{ scaleY: baseUnderlineScale }],
          },
        ]}>
        <Animated.View
          style={[
            styles.underline,
            {
              backgroundColor: underlineActiveColor,
              transform: [{ scaleX: underLineXAnimation }, { scaleY: 2 }],
            },
          ]}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
  },
});

export default withTheme(TextFieldUnderline);
