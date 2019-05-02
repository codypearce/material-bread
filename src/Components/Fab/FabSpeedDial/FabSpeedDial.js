import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import { Fab } from '../../..';
import styles from './FabSpeedDial.styles';

class FabSpeedDial extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onPress: PropTypes.func,
    actions: PropTypes.array,
    fab: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static defaultProps = {
    fab: 'add',
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
    const { open, onPress } = this.state;

    this.setState({
      open: !open,
    });

    if (!open) {
      this.openAnimation();
    } else {
      this.closeAnimation();
    }

    if (onPress) onPress();
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
      <View
        style={{
          marginBottom: 24,
          alignItems: 'flex-end',
        }}>
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

  _renderFab() {
    const { fab } = this.props;

    if (typeof fab == 'string' || fab instanceof String || !fab) {
      return <Fab icon={fab} onPress={() => this.animateActions()} />;
    } else {
      return React.cloneElement(fab, {
        color: fab.props.color ? fab.props.color : 'white',
        onPress: () => this.animateActions(),
      });
    }
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderActions()}
        {this._renderFab()}
      </View>
    );
  }
}

export default withTheme(FabSpeedDial);
