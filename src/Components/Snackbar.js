import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, View, Text } from 'react-native';

import Button from './Button';
import Paper from './Paper';
import withTheme from '../Theme/withTheme';
import shadow from '../Abstract/shadow';

class Snackbar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    duration: PropTypes.number,
    animationDuration: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.object,
    onButtonPress: PropTypes.func,
    buttonLabel: PropTypes.string,
  };

  static defaultProps = {
    animationDuration: 200,
    duration: 4000,
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
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: animationDuration,
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
      }),

      Animated.timing(opacity, {
        toValue: 0,
        duration: animationDuration,
      }),
    ]).start();
  }

  _renderButton() {
    const { buttonLabel, onButtonPress } = this.props;
    if (buttonLabel) {
      return (
        <Button
          onPress={() => onButtonPress()}
          style={styles.button}
          type="text">
          {buttonLabel}
        </Button>
      );
    }
    return null;
  }

  render() {
    const { children, style, buttonLabel } = this.props;
    const { opacity, scaleAnimation } = this.state;

    return (
      <View style={styles.container}>
        <Paper
          style={{
            ...styles.card,
            opacity: opacity,
            transform: [
              {
                scale: scaleAnimation,
              },
            ],
            ...style,
          }}>
          <Text
            style={{
              ...styles.text,
              marginRight: buttonLabel ? 0 : 16,
            }}>
            {children}
          </Text>
          {this._renderButton()}
        </Paper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  card: {
    ...shadow(6),
    borderRadius: 4,
    backgroundColor: '#323232',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
    marginLeft: 16,
    marginVertical: 14,
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 6,
  },
});

export default withTheme(Snackbar);
