import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Platform,
  Modal as NativeModal,
} from 'react-native';
import WebModal from 'modal-enhanced-react-native-web';
const ImplementedModal = Platform.OS == 'web' ? WebModal : NativeModal;

import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import styles from './Modal.styles';

class Modal extends Component {
  static propTypes = {
    buttons: PropTypes.element,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onTouchOutside: PropTypes.func,
    containerStyle: PropTypes.object,
    NativeModalProps: PropTypes.object,
    children: PropTypes.node,
  };

  static defaultProps = {
    visible: false,
  };

  state = {
    opacityAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(0.5),
    animationDuration: 200,
    show: false,
  };

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (visible !== prevProps.visible) {
      this.toggle();
    }
  }

  toggle() {
    const {
      opacityAnimation,
      scaleAnimation,
      animationDuration,
      show,
    } = this.state;
    const { visible } = this.props;

    let opacity = 0;
    let scale = 0;
    if (visible) {
      opacity = 1;
      scale = 1;
      this.setState(
        {
          show: !show,
        },
        () => {
          Animated.parallel([
            Animated.timing(opacityAnimation, {
              toValue: opacity,
              duration: animationDuration + 50,
            }),
            Animated.timing(scaleAnimation, {
              toValue: scale,
              duration: animationDuration,
            }),
          ]).start();
        },
      );
    } else {
      Animated.parallel([
        Animated.timing(opacityAnimation, {
          toValue: opacity,
          duration: animationDuration,
        }),
        Animated.timing(scaleAnimation, {
          toValue: scale,
          duration: 400,
        }),
      ]).start(() => {
        this.setState({
          show: !show,
        });
      });
    }
  }

  render() {
    const {
      onRequestClose,
      onShow,
      onTouchOutside,
      containerStyle,
      children,
      NativeModalProps,
    } = this.props;

    const { opacityAnimation, scaleAnimation, show } = this.state;

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return (
      <ImplementedModal
        animationType={'none'}
        transparent={true}
        visible={show}
        onRequestClose={onRequestClose}
        onShow={onShow}
        {...NativeModalProps}>
        <View style={[styles.container, containerStyle]}>
          <TouchableWithoutFeedback onPress={onTouchOutside}>
            <Animated.View
              style={{
                width: deviceWidth,
                height: deviceHeight,
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                padding: 24,
                opacity: opacityAnimation,
              }}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={{
              opacity: opacityAnimation,
              transform: [{ scale: scaleAnimation }],
            }}>
            {children}
          </Animated.View>
        </View>
      </ImplementedModal>
    );
  }
}

export default withTheme(Modal);
