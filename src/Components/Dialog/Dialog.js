import React, { Component } from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import withTheme from '../../Theme/withTheme';
import styles from './Dialog.styles';

class Dialog extends Component {
  static propTypes = {
    dialogStyle: PropTypes.object,
    children: PropTypes.node,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onTouchOutside: PropTypes.func,
  };

  render() {
    const {
      dialogStyle,
      visible,
      onRequestClose,
      onShow,
      onTouchOutside,
      children,
    } = this.props;

    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        onShow={onShow}
        onTouchOutside={onTouchOutside}>
        <View style={[styles.container, dialogStyle]}>{children}</View>
      </Modal>
    );
  }
}

export default withTheme(Dialog);
