import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Easing, Platform, ScrollView } from 'react-native';
import withTheme from '../../Theme/withTheme';
import styles from './Menu.styles';
import ModelMenu from './ModalMenu';

class Menu extends Component {
  static propTypes = {
    button: PropTypes.node,
    children: PropTypes.node,
    onHidden: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    visible: PropTypes.bool,
    menuStyle: PropTypes.object,
    sameWidth: PropTypes.bool,
    onBackdropPress: PropTypes.func,
    modalMenuStyle: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    noBackDrop: PropTypes.bool,
    tooltip: PropTypes.bool,
    tooltipPosition: PropTypes.string,
  };

  state = {
    menuHeight: new Animated.Value(0),
    menuWidth: new Animated.Value(0),
    opacity: new Animated.Value(0),
    modalMenuWidth: 0,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    animationDuration: 300,
    expanded: false,
  };

  componentDidMount() {
    const { visible } = this.props;

    if (visible) {
      this.toggle();
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible !== prevProps.visible) {
      this.toggle();
    }
  }

  onModalMenuLayout = e => {
    const { width } = e.nativeEvent.layout;
    this.setState({
      modalMenuWidth: width,
    });
  };

  onButtonLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    let locationX, locationY;

    if (Platform.OS === 'web') {
      locationX = e.nativeEvent.target.getBoundingClientRect().x;
      locationY = e.nativeEvent.target.getBoundingClientRect().y;
      this.setState({
        buttonWidth: width,
        buttonHeight: height,
        buttonPositionX: locationX,
        buttonPositionY: locationY,
      });
    } else {
      this.marker.measure((x, y, width, height, pageX, pageY) => {
        locationX = pageX;
        locationY = pageY;
        this.setState({
          buttonWidth: width,
          buttonHeight: height,
          buttonPositionX: locationX,
          buttonPositionY: locationY,
        });
      });
    }
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

    if (!initialHeight || !initialWidth) {
      setTimeout(() => this.toggle(), 100);
      return;
    }

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
    const {
      menuHeight,
      menuWidth,
      opacity,
      buttonWidth,
      buttonPositionY,
      buttonPositionX,
      modalMenuWidth,
      initialWidth,
      initialHeight,
    } = this.state;
    const {
      button,
      children,
      menuStyle,
      modalMenuStyle,
      sameWidth,
      visible,
      onBackdropPress,
      contentContainerStyle,
      tooltip,
      tooltipPosition,
      noBackDrop,
    } = this.props;

    const menuContainerStyle = {
      height: menuHeight,
      width: menuWidth,
      opacity: opacity,
      top: buttonPositionY ? buttonPositionY - 14 : 0,
    };

    if (modalMenuWidth > 0) {
      if (buttonPositionX > modalMenuWidth / 2) {
        menuContainerStyle.right =
          modalMenuWidth - buttonPositionX - buttonWidth;
      } else {
        menuContainerStyle.left = buttonPositionX - 10;
      }
    }

    if (tooltip) {
      menuContainerStyle.top = buttonPositionY - initialHeight - 12;
      menuContainerStyle.left =
        buttonPositionX - 8 + buttonWidth / 2 - initialWidth / 2;

      if (tooltipPosition == 'bottom') {
        menuContainerStyle.top =
          buttonPositionY + initialHeight + (Platform.OS == 'web' ? 4 : -4);
      } else if (tooltipPosition == 'right') {
        menuContainerStyle.top =
          buttonPositionY - (Platform.OS == 'web' ? 4 : 8);
        menuContainerStyle.left = buttonPositionX - 8 + buttonWidth;
      } else if (tooltipPosition == 'left') {
        menuContainerStyle.top =
          buttonPositionY - (Platform.OS == 'web' ? 4 : 8);
        menuContainerStyle.left = buttonPositionX - 12 - initialWidth;
      }
    }

    if (
      Number.isNaN(menuContainerStyle.top) ||
      Number.isNaN(menuContainerStyle.left)
    ) {
      menuContainerStyle.top = 0;
      menuContainerStyle.left = 0;
    }

    return (
      <View>
        <View
          onLayout={this.onButtonLayout}
          ref={ref => {
            this.marker = ref;
          }}
          style={{ alignSelf: 'flex-start' }}>
          {button}
        </View>
        <ModelMenu
          onLayout={this.onModalMenuLayout}
          animationType={'none'}
          visible={visible}
          onBackdropPress={onBackdropPress}
          noBackDrop={noBackDrop}
          transparent>
          <Animated.View
            style={[styles.menuContainer, menuContainerStyle, modalMenuStyle]}>
            <View
              style={[
                styles.menu,
                { width: sameWidth ? buttonWidth : 'auto' },
                menuStyle,
              ]}
              onLayout={this.onMenuLayout}>
              <ScrollView
                contentContainerStyle={[
                  { paddingVertical: 8 },
                  contentContainerStyle,
                ]}>
                {children}
              </ScrollView>
            </View>
          </Animated.View>
        </ModelMenu>
      </View>
    );
  }
}

export default withTheme(Menu);
