import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Animated,
  PanResponder,
  Modal,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './SheetSide.styles';

const needsSafeArea = Platform.OS === 'ios' && parseInt(Platform.Version, 10);

class SheetSide extends Component {
  constructor(props) {
    super(props);
    this.createPanResponder(this.props);
  }

  static propTypes = {
    duration: PropTypes.number,
    onBackdropPress: PropTypes.func,
    onSwipeLeft: PropTypes.func,
    onSwipeRight: PropTypes.func,
    children: PropTypes.node,
    wrapperStyles: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    visible: PropTypes.bool,
    pageWidth: PropTypes.number,
    pageHeight: PropTypes.number,
    widthPercentage: PropTypes.number,
    side: PropTypes.string,
    testID: PropTypes.string,
    sheetWidth: PropTypes.number,
  };

  static defaultProps = {
    duration: 200,
    widthPercentage: 0.8,
    side: 'right',
    sheetWidth: 300,
  };

  state = {
    internalVisible: false,
    animatedPosition: new Animated.Value(0),
    pan: new Animated.ValueXY(),
    initialHeight: 0,
    initialWidth: 0,
    fullHeight: 0,
    fullWidth: 0,
  };

  componentDidMount() {
    const { visible, pageHeight, pageWidth, side } = this.props;
    const { pan } = this.state;
    if (visible) {
      this._open();
    }

    this.createPanResponder(this.props);

    const width = Dimensions.get('window').width;

    pan.setValue({ x: side == 'left' ? -width : width, y: 0 });

    this.setState({
      fullHeight: pageHeight ? pageHeight : Dimensions.get('window').height,
      fullWidth: pageWidth ? pageWidth : width,
    });
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible != prevProps.visible) {
      if (visible) {
        this._open();
      } else {
        this._close();
      }
    }
  }

  onMenuLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState(
      {
        initialWidth: width,
        initialHeight: height,
      },
      () => {
        this.createPanResponder(this.props);
      },
    );
  };

  animateSheet(visible) {
    const { duration, widthPercentage, side, sheetWidth } = this.props;
    const { fullWidth, pan } = this.state;

    let openValue =
      Platform.OS == 'web'
        ? fullWidth - sheetWidth
        : fullWidth * (1 - widthPercentage);

    let closeValue = fullWidth;

    if (side == 'left') {
      openValue = 0;
      closeValue = -closeValue;
    }

    if (visible) {
      this.setState({ internalVisible: true }, () => {
        Animated.timing(pan, {
          useNativeDriver: true,
          toValue: {
            x: openValue,
            y: 0,
          },
          duration: duration,
        }).start();
      });
    } else {
      Animated.timing(pan, {
        useNativeDriver: true,
        toValue: { x: closeValue, y: 0 },
        duration: duration,
      }).start(() => {
        this.setState({ internalVisible: false });
      });
    }
  }

  createPanResponder = () => {
    const {
      onSwipeLeft,
      onSwipeRight,
      widthPercentage,
      sheetWidth,
    } = this.props;
    const { fullWidth } = this.state;

    const sheetWidthCalculated =
      Platform.OS == 'web' ? sheetWidth : fullWidth * widthPercentage;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderRelease: (e, gestureState) => {
        if (sheetWidthCalculated / 4 - gestureState.dy < 0) {
          if (onSwipeLeft) onSwipeLeft();
        } else if (sheetWidthCalculated / 4 + gestureState.dy > 0) {
          if (onSwipeRight) onSwipeRight();
        }
      },
    });
  };

  _open() {
    this.animateSheet(true);
  }

  _close = () => {
    this.animateSheet(false);
  };

  _onBackdropPress = () => {
    const { onBackdropPress } = this.props;

    if (onBackdropPress) onBackdropPress();
  };

  _handlePlatform() {
    const { internalVisible } = this.state;

    return (
      <Modal
        transparent
        animationType={'none'}
        visible={internalVisible}
        onRequestClose={this._close}>
        {this._handleSafeView()}
      </Modal>
    );
  }

  _handleSafeView() {
    const { fullWidth } = this.state;
    if (needsSafeArea) {
      return (
        <SafeAreaView
          style={[
            styles.safeAreaView,
            {
              backgroundColor: 'transparent',
              width: fullWidth,
              height: '100%',
            },
          ]}>
          {this._renderContent()}
        </SafeAreaView>
      );
    } else {
      return this._renderContent();
    }
  }

  _renderContent() {
    const {
      children,
      wrapperStyles,
      style,
      widthPercentage,
      testID,
      sheetWidth,
    } = this.props;
    const { pan, fullWidth } = this.state;

    return (
      <View style={[styles.wrapper, wrapperStyles]} testID={testID}>
        <TouchableOpacity
          style={styles.mask}
          activeOpacity={1}
          onPress={this._onBackdropPress}
        />

        <Animated.View
          useNativeDriver={true}
          {...this.panResponder.panHandlers}
          style={[
            styles.container,
            style,

            {
              height: '100%',
              width:
                Platform.OS == 'web' ? sheetWidth : fullWidth * widthPercentage,
              transform: [{ translateX: pan.x }],
            },
          ]}>
          <View onLayout={this.onMenuLayout}>{children}</View>
        </Animated.View>
      </View>
    );
  }

  render() {
    return this._handlePlatform();
  }
}

export default SheetSide;
