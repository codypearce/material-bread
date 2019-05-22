import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  View,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import withTheme from '../../Theme/withTheme';
import styles from './Drawer.styles';
import shadow from '../../Utils/Shadow/shadow';

const needsSafeArea = Platform.OS === 'ios' && parseInt(Platform.Version, 10);

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,

    type: PropTypes.string,
    drawerContent: PropTypes.node,
    children: PropTypes.node,
    animationTime: PropTypes.number,

    pageHeight: PropTypes.number,
    pageWidth: PropTypes.number,
    widthPercentage: PropTypes.number,
    width: PropTypes.number,
    fullHeight: PropTypes.bool,
    position: PropTypes.string,

    appbar: PropTypes.node,
    scrim: PropTypes.bool,
    scrimColor: PropTypes.string,
    scrimOpacity: PropTypes.number,

    style: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    drawerStyle: PropTypes.object,
  };

  static defaultProps = {
    widthPercentage: 0.45,
    width: 240,
    open: false,
    animationTime: 200,
    scrimOpacity: 0.4,
    scrim: true,
    type: 'modal',
    position: 'absolute',
  };

  state = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,

    drawerWidth: 240,
    expanded: false,
    backdropFade: new Animated.Value(0),
    leftOffset: new Animated.Value(0),

    appbarHeight: 0,
    appbarWidth: 0,
  };

  componentDidMount() {
    const { pageWidth, pageHeight, widthPercentage, width } = this.props;

    let screenWidth =
      Platform.OS == 'web' ? '100%' : Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    if (pageWidth) screenWidth = pageWidth;
    if (pageHeight) screenHeight = pageHeight;

    let drawerWidth = screenWidth * widthPercentage;
    if (width) drawerWidth = width;

    this.setState({
      screenWidth,
      screenHeight,
      drawerWidth,
    });
  }

  componentDidUpdate() {
    const { open } = this.props;

    if (open) {
      this.openDrawer();
    } else {
      this.closeDrawer();
    }
  }

  openDrawer = () => {
    const { drawerWidth, leftOffset, backdropFade } = this.state;
    const { animationTime, scrimOpacity } = this.props;

    Animated.parallel([
      Animated.timing(leftOffset, {
        toValue: drawerWidth,
        duration: animationTime,
      }),
      Animated.timing(backdropFade, {
        toValue: scrimOpacity,
        duration: animationTime,
      }),
    ]).start();
  };

  closeDrawer = () => {
    const { animationTime } = this.props;
    const { backdropFade, leftOffset } = this.state;

    Animated.parallel([
      Animated.timing(leftOffset, {
        toValue: 0,
        duration: animationTime,
      }),
      Animated.timing(backdropFade, {
        toValue: 0,
        duration: animationTime,
      }),
    ]).start();
  };

  _onAppbarLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      appbarWidth: width,
      appbarHeight: height,
    });
  };

  _renderAppBar() {
    const { appbar } = this.props;
    return (
      <View style={{ zIndex: 1200 }} onLayout={this._onAppbarLayout}>
        {appbar}
      </View>
    );
  }

  _renderScrim() {
    const { open, scrim, scrimColor, type } = this.props;
    const {
      backdropFade,
      screenWidth,
      screenHeight,
      appbarHeight,
    } = this.state;

    let scrimColorImplemented = type == 'push' ? 'transparent' : 'black';
    if (scrimColor) scrimColorImplemented = scrimColor;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: scrim ? scrimColorImplemented : 'transparent',
            opacity: backdropFade,
            zIndex: open ? 10 : 0,
            width: screenWidth,
            height: screenHeight,
            top: appbarHeight,
            position: Platform.OS == 'web' ? 'fixed' : 'absolute',
          },
        ]}>
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <View
            style={[
              styles.container,
              {
                width: screenWidth,
                height: screenHeight,
                backgroundColor: scrim ? scrimColorImplemented : 'transparent',
              },
            ]}
          />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }

  _renderAppContent() {
    const { children, appbar, type, open, contentContainerStyle } = this.props;
    const { leftOffset } = this.state;

    const isPush = type == 'push';
    const isPermanent = type == 'permanent';

    if (isPush || isPermanent) {
      return (
        <View style={contentContainerStyle}>
          {appbar ? this._renderAppBar() : null}
          <Animated.View
            style={{
              transform: [{ translateX: leftOffset }],
              flex: 1,
              width:
                open && Platform.OS == 'web' && isPermanent
                  ? 'calc(100% - 240px)'
                  : '100%',
            }}>
            {children}
          </Animated.View>
        </View>
      );
    }
    return (
      <View style={[{ height: '100%' }, contentContainerStyle]}>
        {appbar ? this._renderAppBar() : null}
        <View style={{ height: '100%' }}>{children}</View>
      </View>
    );
  }

  _renderDrawer() {
    const {
      drawerContent,
      type,
      open,
      drawerStyle,
      fullHeight,
      position,
    } = this.props;
    const { drawerWidth, screenHeight, leftOffset, appbarHeight } = this.state;

    const isPush = type == 'push';
    const isPermanent = type == 'permanent';

    const offsetDrawerShadow = isPermanent || open ? 0 : 5;
    const shadowImplemented = isPush || isPermanent ? shadow(0) : shadow(8);

    return (
      <Fragment>
        <Animated.View
          style={[
            styles.drawer,
            {
              position: position,
              width: drawerWidth,
              left: -drawerWidth - offsetDrawerShadow,
              top: appbarHeight,
              height: fullHeight ? '100%' : screenHeight,
              transform: [{ translateX: leftOffset }],
              ...shadowImplemented,
            },
            drawerStyle,
          ]}>
          {drawerContent}
        </Animated.View>

        {isPermanent ? null : this._renderScrim()}
        {this._renderAppContent()}
      </Fragment>
    );
  }

  render() {
    const { style } = this.props;
    const { screenWidth } = this.state;

    if (needsSafeArea) {
      return (
        <SafeAreaView
          style={[
            styles.safeAreaView,
            { position: 'relative', width: screenWidth, overflow: 'hidden' },
            style,
          ]}>
          {this._renderDrawer()}
        </SafeAreaView>
      );
    }

    return (
      <View
        style={[
          styles.fullWidthContainer,
          {
            position: 'relative',
            width: screenWidth,
            overflow: 'hidden',
          },
          style,
        ]}>
        {this._renderDrawer()}
      </View>
    );
  }
}

export default withTheme(Drawer);
