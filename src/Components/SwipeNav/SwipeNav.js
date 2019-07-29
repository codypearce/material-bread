import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Animated } from 'react-native';
import styles from './SwipeNav.styles';
import getStatusBarHeight from '../../helpers/statusBarHeight';

class SwipeNav extends Component {
  static propTypes = {
    header: PropTypes.node,
    scrollViewProps: PropTypes.object,
    scrollComponent: PropTypes.node,
    style: PropTypes.object,
    headerContainerStyle: PropTypes.object,
    scrollViewStyle: PropTypes.object,
    children: PropTypes.node,
  };

  state = {
    headerHeight: 56,
    offsetY: 0,
    headerOffsetY: new Animated.Value(0),
    scrollPaddingTop: new Animated.Value(56),
  };

  onHeaderLayout = e => {
    this.setState({
      headerHeight: e.nativeEvent.layout.height,
    });
  };

  onScroll = e => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const lastOffsetY = this.state.offsetY;

    this.setState({
      offsetY,
    });

    if (offsetY - lastOffsetY > 20 || offsetY - lastOffsetY < -20) {
      if (offsetY > lastOffsetY) {
        this.animateHeader(true);
      } else {
        this.animateHeader(false);
      }
    }
  };

  animateHeader(hide) {
    const { headerOffsetY, headerHeight, scrollPaddingTop } = this.state;
    const newHeaderOffset = hide ? -headerHeight - getStatusBarHeight() : 0;
    const newScrollPadding = hide ? 0 : headerHeight;
    Animated.parallel([
      Animated.timing(headerOffsetY, {
        toValue: newHeaderOffset,
        duration: 100,
      }),
      Animated.timing(scrollPaddingTop, {
        toValue: newScrollPadding,
        duration: 100,
      }),
    ]).start();
  }

  renderScrollView() {
    const { scrollViewStyle, scrollViewProps, children } = this.props;
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        {...scrollViewProps}
        onScroll={this.onScroll}
        style={[
          styles.scroll,
          { paddingTop: this.state.scrollPaddingTop },
          scrollViewStyle,
        ]}>
        {children}
      </Animated.ScrollView>
    );
  }

  renderCustomScrollView() {
    const { scrollComponent, scrollViewStyle } = this.props;
    return React.cloneElement(scrollComponent, {
      scrollEventThrottle: 16,
      style: [
        styles.scroll,
        { paddingTop: this.state.scrollPaddingTop },
        scrollViewStyle,
      ],
      onScroll: e => {
        this.onScroll(e);
        scrollComponent.props.onScroll && scrollComponent.props.onScroll(e);
      },
    });
  }

  _renderHeader() {
    const { header, headerContainerStyle } = this.props;

    return (
      <Animated.View
        style={[
          styles.headerContainer,
          headerContainerStyle,
          {
            transform: [{ translateY: this.state.headerOffsetY }],
          },
        ]}
        onLayout={this.onHeaderLayout}>
        {header}
      </Animated.View>
    );
  }

  render() {
    const { scrollComponent, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this._renderHeader()}
        <View style={[styles.scrollContainer]}>
          {scrollComponent
            ? this.renderCustomScrollView()
            : this.renderScrollView()}
        </View>
      </View>
    );
  }
}

export default SwipeNav;
