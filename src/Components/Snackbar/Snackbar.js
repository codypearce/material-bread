import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';

import Button from '../Button/Button';
import Paper from '../Paper/Paper';
import withTheme from '../../Theme/withTheme';
import styles from './Snackbar.styles';

class Snackbar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    animationDuration: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onButtonPress: PropTypes.func,
    buttonLabel: PropTypes.string,
    buttonTextColor: PropTypes.string,
    testID: PropTypes.string,
  };

  static defaultProps = {
    animationDuration: 200,
  };

  state = {
    scaleAnimation: new Animated.Value(0.8),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    const { visible } = this.props;
    if (visible) this.show();
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible && !prevProps.visible) {
      this.show();
    } else if (!visible && prevProps.visible) {
      this.hide();
    }
  }

  show() {
    const { opacity, scaleAnimation } = this.state;
    const { animationDuration } = this.props;

    this.setState({
      show: false,
    });

    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  hide() {
    const { opacity, scaleAnimation } = this.state;
    const { animationDuration } = this.props;

    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 0.8,
        duration: animationDuration,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  _renderButton() {
    const { buttonLabel, buttonTextColor, onButtonPress } = this.props;
    if (buttonLabel) {
      return (
        <Button
          onPress={() => onButtonPress()}
          style={{ marginHorizontal: 8, marginVertical: 6 }}
          type="text"
          text={buttonLabel}
          textColor={buttonTextColor || null}
        />
      );
    }
    return null;
  }

  render() {
    const { children, style, buttonLabel, visible, testID } = this.props;
    const { opacity, scaleAnimation } = this.state;

    return (
      <View
        style={[styles.container, { zIndex: visible ? 10 : -1 }]}
        testID={testID}>
        <Paper
          style={[
            styles.card,
            {
              opacity: opacity,
              transform: [
                {
                  scale: scaleAnimation,
                },
              ],
            },
            style,
          ]}>
          <Text style={[styles.text, { marginRight: buttonLabel ? 0 : 16 }]}>
            {children}
          </Text>
          {this._renderButton()}
        </Paper>
      </View>
    );
  }
}

export default withTheme(Snackbar);
