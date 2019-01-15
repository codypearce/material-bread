import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import withTheme from '../Theme/withTheme';

const STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN',
};

class Menu extends Component {
  static propTypes = {
    button: PropTypes.node,
    children: PropTypes.node,
    onHidden: PropTypes.func,
    style: PropTypes.object,
    visible: PropTypes.bool,
  };

  _container = null;

  state = {
    menuState: STATES.HIDDEN,

    top: 0,
    left: 0,

    menuWidth: 0,
    menuHeight: 0,

    buttonWidth: 0,
    buttonHeight: 0,

    menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
    opacityAnimation: new Animated.Value(0),

    animationDuration: 300,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    screenIndent: 8,
  };

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (visible && !prevProps.visible) {
      this.show();
    } else if (!visible && prevProps.visible) {
      this.hide();
    }
  }

  _setContainerRef = ref => {
    this._container = ref;
  };

  _onMenuLayout = e => {
    const { animationDuration, easing } = this.state;

    if (this.state.menuState === STATES.ANIMATING) {
      return;
    }

    const { width, height } = e.nativeEvent.layout;

    this.setState(
      {
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height,
      },
      () => {
        Animated.parallel([
          Animated.timing(this.state.menuSizeAnimation, {
            toValue: { x: width, y: height },
            duration: animationDuration,
            easing: easing,
          }),
          Animated.timing(this.state.opacityAnimation, {
            toValue: 1,
            duration: animationDuration,
            easing: easing,
          }),
        ]).start();
      },
    );
  };

  _onButtonLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({ buttonWidth: width, buttonHeight: height });
  };

  _onDismiss = () => {
    if (this.props.onHidden) {
      this.props.onHidden();
    }
  };

  show = () => {
    const { screenIndent } = this.state;

    this._container.measureInWindow((x, y) => {
      const top = Math.max(screenIndent, y);
      const left = Math.max(screenIndent, x);
      this.setState({ menuState: STATES.SHOWN, top, left });
    });
  };

  hide = () => {
    const { animationDuration, easing } = this.state;

    Animated.timing(this.state.opacityAnimation, {
      toValue: 0,
      duration: animationDuration,
      easing: easing,
    }).start(() => {
      // Reset menu
      this.setState(
        {
          menuState: STATES.HIDDEN,
          menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
          opacityAnimation: new Animated.Value(0),
        },
        () => {
          if (Platform.OS !== 'ios' && this.props.onHidden) {
            this.props.onHidden();
          }
        },
      );
    });
  };

  _handleHittingEdges() {
    const dimensions = Dimensions.get('screen');
    let {
      left,
      top,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      menuSizeAnimation,
      opacityAnimation,
      screenIndent,
    } = this.state;

    const transforms = [];

    // Flip by X axis if menu hits right screen border
    if (left > dimensions.width - menuWidth - screenIndent) {
      transforms.push({
        translateX: Animated.multiply(menuSizeAnimation.x, -1),
      });

      left = Math.min(dimensions.width - screenIndent, left + buttonWidth);
    }

    // Flip by Y axis if menu hits bottom screen border
    if (top > dimensions.height - menuHeight - screenIndent) {
      transforms.push({
        translateY: Animated.multiply(menuSizeAnimation.y, -1),
      });

      top = Math.min(dimensions.height - screenIndent, top + buttonHeight);
    }
    return { left, top, transforms, opacity: opacityAnimation };
  }

  render() {
    const { button, style, children } = this.props;
    const { menuSizeAnimation, menuState } = this.state;

    const menuSize = {
      width: menuSizeAnimation.x,
      height: menuSizeAnimation.y,
    };

    const shadowMenuContainerStyle = this._handleHittingEdges();

    const animationStarted = menuState === STATES.ANIMATING;
    const modalVisible = menuState === STATES.SHOWN || animationStarted;

    return (
      <View ref={this._setContainerRef} collapsable={false}>
        <View onLayout={this._onButtonLayout} style={{ flex: 1 }}>
          {button}
        </View>

        <Modal
          visible={modalVisible}
          onRequestClose={this.hide}
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]}
          transparent
          onDismiss={this._onDismiss}>
          <TouchableWithoutFeedback onPress={this.hide}>
            <View style={StyleSheet.absoluteFill}>
              <Animated.View
                onLayout={this._onMenuLayout}
                style={[
                  styles.shadowMenuContainer,
                  shadowMenuContainerStyle,
                  style,
                ]}>
                <Animated.View
                  style={[styles.menuContainer, animationStarted && menuSize]}>
                  {children}
                </Animated.View>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shadowMenuContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 4,
    opacity: 0,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.14,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  menuContainer: {
    overflow: 'hidden',
  },
});

export default withTheme(Menu);
