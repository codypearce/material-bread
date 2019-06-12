import React, { Component } from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.js';
import withTheme from '../../Theme/withTheme';
import styles from './Dialog.styles';
import Button from '../Button/Button.js';
import BodyText from '../Typography/BodyText/BodyText.js';
class Dialog extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onTouchOutside: PropTypes.func,
    actionItems: PropTypes.array,
    title: PropTypes.string,
    supportingText: PropTypes.string,
    contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    testID: PropTypes.string,
  };

  _renderActionItems() {
    const { actionItems } = this.props;
    return (
      <View style={styles.actionItems}>
        {actionItems.map((item, index) => {
          return <Button key={index} text={item.text} onPress={item.onPress} />;
        })}
      </View>
    );
  }

  _renderContent() {
    const {
      style,
      title,
      supportingText,
      children,
      actionItems,
      contentStyle,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={[styles.contentContainer, contentStyle]}>
          {title ? <BodyText style={styles.title}>{title}</BodyText> : null}
          {supportingText ? (
            <BodyText style={styles.supportingText}>{supportingText}</BodyText>
          ) : null}
          {children}
        </View>
        {actionItems ? this._renderActionItems() : null}
      </View>
    );
  }

  render() {
    const {
      visible,
      onRequestClose,
      onShow,
      onTouchOutside,
      testID,
    } = this.props;

    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        onShow={onShow}
        onTouchOutside={onTouchOutside}
        testID={testID}>
        {this._renderContent()}
      </Modal>
    );
  }
}

export default withTheme(Dialog);
