import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Animated,
  PanResponder,
  Modal,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './SheetBottom.styles';

class SheetBottom extends Component {
  constructor(props) {
    super(props);
    this.createPanResponder();
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
    this.createPanResponder();
    const fullHeight = pageHeight
      ? pageHeight
      : Dimensions.get('window').height;
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
    const { pan, initialHeight } = this.state;
    const { width, height } = e.nativeEvent.layout;
    if (height == 0) return;
    if (height <= initialHeight) return;

    const windowHeight = Dimensions.get('window').height;

    this.setState(
      {
        initialWidth: width,
        initialHeight: height,
        fullHeight: windowHeight,
      },
      () => {
        pan.setValue({ x: 0, y: windowHeight });
        this.createPanResponder();
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
    this.setState({ initialHeight: 0 });
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
        onRequestClose={this._close}
        supportedOrientations={['portrait', 'landscape']}>
        {this._renderContent()}
      </Modal>
    );
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
              height: fullHeight,
              paddingVertical: cardVerticalPadding,
              transform: [{ translateY: pan.y }],
            },
          ]}>
          <SafeAreaView onLayout={this.onMenuLayout}>{children}</SafeAreaView>
        </Animated.View>
      </View>
    );
  }

  render() {
    return this._handlePlatform();
  }
}

export default SheetBottom;
