import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Modal as NativeModal,
} from 'react-native';

import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import styles from './ModalMenu.native.styles';

class Modal extends Component {
  static propTypes = {
    buttons: PropTypes.element,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onBackdropPress: PropTypes.func,
    containerStyle: PropTypes.object,
    NativeModalProps: PropTypes.object,
    children: PropTypes.node,
  };

  static defaultProps = {
    visible: false,
  };

  render() {
    const {
      onRequestClose,
      onShow,
      onBackdropPress,
      containerStyle,
      children,
      NativeModalProps,
      visible,
    } = this.props;

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return (
      <NativeModal
        animationType={'none'}
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
        onShow={onShow}
        {...NativeModalProps}>
        <View style={[styles.container, containerStyle]}>
          <TouchableWithoutFeedback onPress={onBackdropPress}>
            <Animated.View
              style={{
                width: deviceWidth,
                height: deviceHeight,
                position: 'absolute',
                padding: 24,
              }}
            />
          </TouchableWithoutFeedback>

          {children}
        </View>
      </NativeModal>
    );
  }
}

export default withTheme(Modal);
