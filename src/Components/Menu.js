import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, View, Easing } from 'react-native';
import withTheme from '../Theme/withTheme';
import shadow from '../Utils/shadow';

class Menu extends Component {
  static propTypes = {
    button: PropTypes.node,
    children: PropTypes.node,
    onHidden: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    visible: PropTypes.bool,
    menuStyle: PropTypes.object,
    sameWidth: PropTypes.bool,
  };

  state = {
    menuHeight: new Animated.Value(0),
    menuWidth: new Animated.Value(0),
    opacity: new Animated.Value(0),
    expanded: false,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    animationDuration: 300,
  };

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (visible !== prevProps.visible) {
      this.toggle();
    }
  }

  onButtonLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      buttonWidth: width,
      buttonHeight: height,
    });
  };

  onMenuLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      initialWidth: width,
      initialHeight: height,
    });
  };

  toggle() {
    const {
      initialHeight,
      initialWidth,
      easing,
      animationDuration,
      buttonWidth,
    } = this.state;

    const { sameWidth } = this.props;

    const widthType = sameWidth ? buttonWidth : initialWidth;

    let opacity = 1;
    let height = initialHeight + 24;
    let width = widthType + 24;

    if (!this.props.visible) {
      opacity = 0;
      height = 0;
      width = 0;
    }

    Animated.parallel([
      Animated.timing(this.state.menuHeight, {
        toValue: height,
        duration: animationDuration,
        easing,
      }),
      Animated.timing(this.state.menuWidth, {
        toValue: width,
        duration: animationDuration,
        easing,
      }),
      Animated.timing(this.state.opacity, {
        toValue: opacity,
        duration: animationDuration,
        easing,
      }),
    ]).start();
  }

  render() {
    const { menuHeight, menuWidth, opacity, buttonWidth } = this.state;
    const { button, children, menuStyle, sameWidth } = this.props;

    return (
      <View>
        <View onLayout={this.onButtonLayout}>{button}</View>

        <Animated.View
          style={[
            styles.menuContainer,
            { height: menuHeight, width: menuWidth, opacity: opacity },
          ]}>
          <View
            style={[
              styles.menu,
              menuStyle,
              { width: sameWidth ? buttonWidth : 'auto' },
            ]}
            onLayout={this.onMenuLayout}>
            {children}
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    left: -10, // Otherwise shadow of inner component is cut off on left
    top: -10, // Padding doesn't work because shows this component when hidden
    overflow: 'hidden',
    position: 'absolute',
  },
  menu: {
    borderRadius: 6,
    position: 'absolute',
    left: 10,
    top: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
    ...shadow(5),
  },
});

export default withTheme(Menu);
