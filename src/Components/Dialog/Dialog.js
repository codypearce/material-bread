import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Modal from '../Modal';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Utils/shadow';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 4,
    paddingTop: 24,

    ...shadow(12),
  },
});

export default withTheme(Dialog);
