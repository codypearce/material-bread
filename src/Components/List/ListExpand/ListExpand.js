import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import Icon from '../../Icon/Icon';
import Hoverable from '../../../Utils/Hoverable/Hoverable.js';
import color from 'color';
import styles from './ListExpand.styles';

class ListExpand extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    icon: PropTypes.node,
    expandIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    rippleProps: PropTypes.object,
  };

  state = {
    isOpen: false,
    menuHeight: new Animated.Value(0),
    animationDuration: 150,
    stateBackgroundColor: null,
  };

  componentDidMount() {
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ isOpen: expanded });
    }
  }

  componentDidUpdate(prevProps) {
    const { expanded } = this.props;

    if (expanded !== prevProps.expanded) {
      this.setState({ isOpen: expanded });
    }
  }

  toggleMenu = () => {
    const { onPress } = this.props;
    const { isOpen, animationDuration, menuHeight, initialHeight } = this.state;

    if (initialHeight == 0) {
      setTimeout(() => this.toggleMenu(), 100);
      return;
    }

    let height = initialHeight;
    if (isOpen) height = 0;

    if (onPress) {
      onPress();
    }

    Animated.timing(menuHeight, {
      toValue: height,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    this.setState({
      isOpen: !isOpen,
    });
  };

  onMenuLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      initialWidth: width,
      initialHeight: height,
    });
  };

  renderExpandedContent() {
    const { children, icon } = this.props;
    const { menuHeight, initialHeight } = this.state;

    return (
      <Animated.View
        useNativeDriver={true}
        style={{
          height: menuHeight,
          overflow: 'hidden',
          width: '100%',
          paddingLeft: icon ? 42 : 0,
          zIndex: 100,
        }}>
        <View
          style={{
            width: '100%',
            height: initialHeight,
            zIndex: 100,
          }}
          onLayout={this.onMenuLayout}>
          {children}
        </View>
      </Animated.View>
    );
  }

  _renderIcon() {
    const { icon } = this.props;

    return React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 24,
      color: icon.props.color ? icon.props.color : '#6e6e6e',
    });
  }

  getBackgroundColor = () => {
    const { stateBackgroundColor } = this.state;

    let implementedBackgroundColor = 'transparent';

    implementedBackgroundColor = stateBackgroundColor
      ? stateBackgroundColor
      : implementedBackgroundColor;

    return implementedBackgroundColor;
  };

  handleHover(toggle) {
    const { rippleProps } = this.props;
    let bgColor = this.getBackgroundColor();
    let implementedColor;

    if (bgColor == 'transparent') {
      implementedColor = toggle ? 'rgba(0, 0, 0, 0.12)' : null;
    } else {
      if (color(bgColor).isDark()) {
        implementedColor = toggle
          ? color(bgColor)
              .lighten(0.15)
              .rgb()
              .string()
          : null;
      } else {
        implementedColor = toggle
          ? color(bgColor)
              .darken(0.15)
              .rgb()
              .string()
          : null;
      }
    }

    if (rippleProps && rippleProps.rippleColor) {
      implementedColor = toggle
        ? color(rippleProps.rippleColor)
            .alpha(0.12)
            .rgb()
            .string()
        : null;
    }
    this.setState({ stateBackgroundColor: implementedColor });
  }

  render() {
    const {
      title,
      style,
      titleStyle,
      icon,
      expandIconStyle,
      rippleProps,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <View>
        <Hoverable
          onHoverIn={() => this.handleHover(true)}
          onHoverOut={() => this.handleHover(false)}>
          <Ripple
            style={[
              styles.container,
              { backgroundColor: this.getBackgroundColor() },
              style,
            ]}
            onPress={this.toggleMenu}
            rippleDuration={100}
            {...rippleProps}>
            {icon ? this._renderIcon() : null}
            <Text
              style={[styles.title, { marginLeft: icon ? 16 : 0 }, titleStyle]}>
              {title}
            </Text>
            <View style={{ flex: 1 }} />
            <Icon
              name={isOpen ? 'expand-less' : 'expand-more'}
              size={24}
              style={expandIconStyle}
            />
          </Ripple>
        </Hoverable>
        {this.renderExpandedContent()}
      </View>
    );
  }
}

export default withTheme(ListExpand);
