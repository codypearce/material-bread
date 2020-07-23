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
} from 'react-native';
import styles from './SheetBottom.styles';
import WebModal from 'modal-enhanced-react-native-web';

class SheetBottom extends Component {
  constructor(props) {
    super(props);
    this.createPanResponder(this.props);
  }

  static propTypes = {
    duration: PropTypes.number,
    onBackdropPress: PropTypes.func,
    onSwipeDown: PropTypes.func,
    onSwipeUp: PropTypes.func,
    children: PropTypes.node,
    wrapperStyles: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    visible: PropTypes.bool,
    cardVerticalPadding: PropTypes.number,
    pageHeight: PropTypes.number,
    testID: PropTypes.string,
  };

  static defaultProps = {
    duration: 200,
    cardVerticalPadding: 20,
  };

  state = {
    internalVisible: false,
    pan: new Animated.ValueXY(),
    initialHeight: 0,
    initialWidth: 0,
    fullHeight: 0,
  };

  componentDidMount() {
    const { visible, pageHeight } = this.props;
    const { pan } = this.state;
    if (visible) {
      this._open();
    }

    const fullHeight = pageHeight
      ? pageHeight
      : Dimensions.get('window').height;
    this.createPanResponder(this.props);
    pan.setValue({ x: 0, y: fullHeight });
    this.setState({
      fullHeight,
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
    const { pan, initialHeight, fullHeight } = this.state;
    const { width, height } = e.nativeEvent.layout;
    if (height == 0) return;
    if (height <= initialHeight) return;

    this.setState(
      {
        initialWidth: width,
        initialHeight: height,
      },
      () => {
        pan.setValue({ x: 0, y: fullHeight });
        this.createPanResponder(this.props);
      },
    );
  };

  animateSheet(visible) {
    const { cardVerticalPadding, duration } = this.props;
    const { initialHeight, fullHeight, pan } = this.state;

    if (visible) {
      this.setState({ internalVisible: true }, () => {
        if (initialHeight == 0) {
          setTimeout(() => this.animateSheet(true), 100);
          return;
        }
        Animated.spring(pan, {
          useNativeDriver: true,
          toValue: {
            x: 0,
            y: fullHeight - initialHeight - cardVerticalPadding,
          },
        }).start();
      });
    } else {
      Animated.timing(pan, {
        useNativeDriver: true,
        toValue: { x: 0, y: fullHeight },
        duration: duration,
      }).start(() => {
        this.setState({ internalVisible: false });
      });
    }
  }

  createPanResponder = () => {
    const { onSwipeDown, onSwipeUp, cardVerticalPadding } = this.props;
    const { pan, initialHeight, fullHeight } = this.state;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy < 80 && gestureState.dy > -40) {
          Animated.timing(pan, {
            useNativeDriver: true,
            toValue: {
              x: 0,
              y:
                fullHeight -
                initialHeight -
                cardVerticalPadding +
                gestureState.dy,
            },
            duration: 0,
          }).start();
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (initialHeight / 4 - gestureState.dy < 0) {
          if (onSwipeDown) onSwipeDown();
        } else if (initialHeight / 4 + gestureState.dy > 0) {
          if (onSwipeUp) onSwipeUp();
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
    if (Platform.OS == 'web') {
      return (
        <WebModal
          transparent
          animationType={'none'}
          visible={internalVisible}
          onRequestClose={this._close}
          style={{ margin: 0 }}>
          {this._renderContent()}
        </WebModal>
      );
    } else {
      return (
        <Modal
          transparent
          animationType={'none'}
          visible={internalVisible}
          onRequestClose={this._close}>
          {this._renderContent()}
        </Modal>
      );
    }
  }

  _renderContent() {
    const {
      children,
      wrapperStyles,
      style,
      cardVerticalPadding,
      testID,
    } = this.props;
    const { pan, fullHeight } = this.state;

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
              position: 'absolute',
              bottom: 0,
              height: fullHeight,
              paddingVertical: cardVerticalPadding,
              transform: [{ translateY: pan.y }],
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

export default SheetBottom;
