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

const needsSafeArea = Platform.OS === 'ios' && parseInt(Platform.Version, 10);

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,

    drawerContent: PropTypes.node,
    children: PropTypes.node,

    animationTime: PropTypes.number,
    opacity: PropTypes.number,

    pageHeight: PropTypes.number,
    pageWidth: PropTypes.number,
    widthPercentage: PropTypes.number,
    width: PropTypes.number,

    appbar: PropTypes.node,
  };

  static defaultProps = {
    widthPercentage: 0.45,
    width: 240,
    open: false,
    animationTime: 200,
    opacity: 0.4,
  };

  state = {
    screenWidth: 0,
    screenHeight: 0,

    drawerWidth: 0,
    expanded: false,
    backdropFade: new Animated.Value(0),
    leftOffset: new Animated.Value(0),

    appbarHeight: 0,
    appbarWidth: 0,
  };

  componentDidMount() {
    const { pageWidth, pageHeight, widthPercentage, width } = this.props;

    const screenWidth = pageWidth ? pageWidth : Dimensions.get('window').width;
    const screenHeight = pageHeight
      ? pageHeight
      : Dimensions.get('window').height;

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
    const { animationTime, opacity } = this.props;

    Animated.parallel([
      Animated.timing(leftOffset, {
        toValue: drawerWidth,
        duration: animationTime,
        useNativeDriver: true,
      }),
      Animated.timing(backdropFade, {
        toValue: opacity,
        duration: animationTime,
        useNativeDriver: true,
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
        useNativeDriver: true,
      }),
      Animated.timing(backdropFade, {
        toValue: 0,
        duration: animationTime,
        useNativeDriver: true,
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

  _renderDrawer() {
    const { children, drawerContent, open, appbar } = this.props;
    const {
      backdropFade,
      drawerWidth,
      screenWidth,
      screenHeight,
      leftOffset,
      appbarHeight,
    } = this.state;

    const offsetDrawerShadow = 5;
    return (
      <Fragment>
        <Animated.View
          style={[
            styles.drawer,
            {
              width: drawerWidth,
              left: -drawerWidth - offsetDrawerShadow,
              top: appbarHeight,
              height: screenHeight,
              transform: [{ translateX: leftOffset }],
              zIndex: 100,
            },
          ]}>
          {drawerContent}
        </Animated.View>

        <Animated.View
          style={[
            styles.container,
            {
              opacity: backdropFade,
              zIndex: open ? 10 : 0,
              width: screenWidth,
              height: screenHeight,
            },
          ]}>
          <TouchableWithoutFeedback onPress={this.props.onClose}>
            <View
              style={[
                styles.container,
                { width: screenWidth, height: screenHeight },
              ]}
            />
          </TouchableWithoutFeedback>
        </Animated.View>
        {appbar ? this._renderAppBar() : null}
        <View>{children}</View>
      </Fragment>
    );
  }

  render() {
    const { drawerWidth, screenWidth } = this.state;

    if (needsSafeArea) {
      return (
        <SafeAreaView
          style={[styles.safeAreaView, { width: screenWidth + drawerWidth }]}>
          {this._renderDrawer()}
        </SafeAreaView>
      );
    }

    return (
      <View style={[styles.fullWidthContainer, { width: screenWidth }]}>
        {this._renderDrawer()}
      </View>
    );
  }
}

export default withTheme(Drawer);
