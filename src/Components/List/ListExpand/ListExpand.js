import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import Icon from '../../Icon/Icon';
import styles from './ListExpand.styles';

class ListExpand extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    theme: PropTypes.object,
    icon: PropTypes.node,
  };

  state = {
    isOpen: false,
    menuHeight: new Animated.Value(0),
    animationDuration: 150,
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
        style={{
          height: menuHeight,
          overflow: 'hidden',
          width: icon && Platform.OS == 'web' ? 'calc(100% - 56px)' : '100%',
          marginLeft: icon ? 56 : 0,
          zIndex: 100,
        }}>
        <View
          style={{
            position: 'absolute',
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

  render() {
    const { title, style, titleStyle, icon } = this.props;
    const { isOpen } = this.state;

    return (
      <View>
        <Ripple
          style={[styles.container, style]}
          onPress={this.toggleMenu}
          rippleDuration={100}>
          {icon ? this._renderIcon() : null}
          <Text
            style={[styles.title, { marginLeft: icon ? 32 : 0 }, titleStyle]}>
            {title}
          </Text>
          <View style={{ flex: 1 }} />
          <Icon name={isOpen ? 'expand-less' : 'expand-more'} size={24} />
        </Ripple>
        {this.renderExpandedContent()}
      </View>
    );
  }
}

export default withTheme(ListExpand);
