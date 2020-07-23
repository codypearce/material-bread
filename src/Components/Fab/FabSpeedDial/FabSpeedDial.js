import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Fab from '../Fab.js';
import styles from './FabSpeedDial.styles';

class FabSpeedDial extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onPress: PropTypes.func,
    actions: PropTypes.array,
    fab: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    testID: PropTypes.string,
    fabProps: PropTypes.object,
  };

  static defaultProps = {
    fab: 'add',
  };

  state = {
    open: false,
    fabIcon: 'add',
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

  toggleFabIcon() {
    const { fab } = this.props;
    const { open } = this.state;

    let fabIcon;
    if (typeof fab != 'string') {
      fabIcon = open ? 'clear' : fab.props.icon;
    } else {
      fabIcon = open ? 'clear' : fab;
    }

    this.setState({ fabIcon });
  }

  animateActions() {
    const { onPress } = this.props;
    const { open } = this.state;

    this.setState({
      open: !open,
    });

    if (!open) {
      this.openAnimation();
    } else {
      this.closeAnimation();
    }

    this.toggleFabIcon();
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
              useNativeDriver={true}
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
    const { fab, style, fabProps } = this.props;
    let { fabIcon, open } = this.state;

    if (typeof fab == 'string' || fab instanceof String || !fab) {
      return (
        <Fab
          icon={fabIcon}
          onPress={() => this.animateActions()}
          style={style}
          {...fabProps}
        />
      );
    } else {
      return React.cloneElement(fab, {
        label: open ? '' : fab.props.label,
        icon: fabIcon,
        color: fab.props.color ? fab.props.color : 'white',
        onPress: () => this.animateActions(),
      });
    }
  }

  render() {
    const { containerStyle, testID } = this.props;
    return (
      <View style={[styles.container, containerStyle]} testID={testID}>
        {this.renderActions()}
        {this._renderFab()}
      </View>
    );
  }
}

export default withTheme(FabSpeedDial);
