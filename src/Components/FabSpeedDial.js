import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Fab from './Fab';

class FabSpeedDial extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    actions: PropTypes.array,
  };

  state = {
    open: false,
    actionAnimationsScale: [
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
    ],
    actionAnimationsOpacity: [
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
    ],
  };

  toggleSpeedDial() {
    this.setState({ open: !this.state.open });
  }

  animateActions() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });

    if (!open) {
      this.openAnimation();
    } else {
      this.closeAnimation();
    }
  }

  openAnimation() {
    const { actionAnimationsScale, actionAnimationsOpacity } = this.state;
    Animated.parallel([
      Animated.stagger(
        50,
        actionAnimationsScale
          .map(animation =>
            Animated.timing(animation, {
              toValue: 1,
              duration: 150,
              useNativeDriver: true,
            }),
          )
          .reverse(),
      ),
      Animated.stagger(
        50,
        actionAnimationsOpacity
          .map(animation =>
            Animated.timing(animation, {
              toValue: 1,
              duration: 150,
              useNativeDriver: true,
            }),
          )
          .reverse(),
      ),
    ]).start();
  }

  closeAnimation() {
    const { actionAnimationsScale, actionAnimationsOpacity } = this.state;
    Animated.parallel([
      Animated.stagger(
        50,
        actionAnimationsScale.map(animation =>
          Animated.timing(animation, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.stagger(
        50,
        actionAnimationsOpacity.map(animation =>
          Animated.timing(animation, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }),
        ),
      ),
    ]).start();
  }

  renderActions() {
    const { actions } = this.props;

    return (
      <View style={{ marginBottom: 24 }}>
        {actions.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={{
                marginTop: 16,
                transform: [{ scale: this.state.actionAnimationsScale[index] }],
                opacity: this.state.actionAnimationsOpacity[index],
              }}>
              {item}
            </Animated.View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderActions()}
        <Fab onPress={() => this.animateActions()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default withTheme(FabSpeedDial);
