import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Animated } from 'react-native';
import styles from './SwipeNav.styles';
import getStatusBarHeight from '../../helpers/statusBarHeight';

class SwipeNav extends Component {
  static propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node,
    scrollViewProps: PropTypes.object,
    scrollComponent: PropTypes.node,
    style: PropTypes.object,
    headerContainerStyle: PropTypes.object,
    footerContainerStyle: PropTypes.object,
    scrollViewStyle: PropTypes.object,
    children: PropTypes.node,
  };

  state = {
    headerHeight: 56,
    footerHeight: 100,
    offsetY: 0,
    headerOffsetY: new Animated.Value(0),
    scrollPaddingTop: new Animated.Value(56),
    footerOffsetY: new Animated.Value(0),
    scrollPaddingBottom: new Animated.Value(100),
  };

  onHeaderLayout = e => {
    this.setState({
      headerHeight: e.nativeEvent.layout.height,
    });
  };

  onFooterLayout = e => {
    this.setState({
      footeerHeight: e.nativeEvent.layout.height,
    });
  };

  onScroll = e => {
    const { header, footer } = this.props;
    const offsetY = e.nativeEvent.contentOffset.y;
    const lastOffsetY = this.state.offsetY;

    this.setState({
      offsetY,
    });

    if ((header && offsetY - lastOffsetY > 20) || offsetY - lastOffsetY < -20) {
      if (offsetY > lastOffsetY) {
        this.animateHeader(true);
      } else {
        this.animateHeader(false);
      }
    }
    if ((footer && offsetY - lastOffsetY < -20) || offsetY - lastOffsetY > 20) {
      if (offsetY < lastOffsetY) {
        this.animateFooter(true);
      } else {
        this.animateFooter(false);
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
        useNativeDriver: true,
      }),
      Animated.timing(scrollPaddingTop, {
        toValue: newScrollPadding,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  animateFooter(hide) {
    const { footerOffsetY, footerHeight, scrollPaddingBottom } = this.state;
    const newFooterOffset = hide ? footerHeight : 0;
    const newScrollPadding = hide ? 0 : footerHeight;
    Animated.parallel([
      Animated.timing(footerOffsetY, {
        toValue: newFooterOffset,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scrollPaddingBottom, {
        toValue: newScrollPadding,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  renderScrollView() {
    const {
      header,
      footer,
      scrollViewStyle,
      scrollViewProps,
      children,
    } = this.props;
    return (
      <Animated.ScrollView
        useNativeDriver={true}
        scrollEventThrottle={16}
        {...scrollViewProps}
        onScroll={this.onScroll}
        style={[
          styles.scroll,
          {
            paddingTop: header ? this.state.scrollPaddingTop : 0,
            paddingBottom: footer ? this.state.paddingBottom : 0,
          },
          scrollViewStyle,
        ]}>
        {children}
      </Animated.ScrollView>
    );
  }

  renderCustomScrollView() {
    const { header, footer, scrollComponent, scrollViewStyle } = this.props;
    return React.cloneElement(scrollComponent, {
      scrollEventThrottle: 16,
      style: [
        styles.scroll,
        {
          paddingTop: header ? this.state.scrollPaddingTop : 0,
          paddingBottom: footer ? this.state.paddingBottom : 0,
        },
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
        useNativeDriver={true}
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

  _renderFooter() {
    const { footer, footerContainerStyle } = this.props;

    return (
      <Animated.View
        useNativeDriver={true}
        style={[
          styles.footerContainer,
          footerContainerStyle,
          {
            transform: [{ translateY: this.state.footerOffsetY }],
          },
        ]}
        onLayout={this.onFooterLayout}>
        {footer}
      </Animated.View>
    );
  }

  render() {
    const { header, footer, scrollComponent, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {header ? this._renderHeader() : null}
        <View style={[styles.scrollContainer]}>
          {scrollComponent
            ? this.renderCustomScrollView()
            : this.renderScrollView()}
        </View>
        {footer ? this._renderFooter() : null}
      </View>
    );
  }
}

export default SwipeNav;
