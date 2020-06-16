import React, { Component } from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
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
    actionItems: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
    ),
    actionItemsContainerStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    supportingText: PropTypes.string,
    supportingTextStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    testID: PropTypes.string,
  };

  _renderActionItems() {
    const { actionItems, actionItemsContainerStyle } = this.props;
    return (
      <View style={[styles.actionItems, actionItemsContainerStyle]}>
        {actionItems.map((item, index) => {
          if (React.isValidElement(item)) return item;
          return <Button key={index} density={-1} {...item} />;
        })}
      </View>
    );
  }

  _renderContent() {
    const {
      style,
      title,
      titleStyle,
      supportingText,
      supportingTextStyle,
      children,
      actionItems,
      contentStyle,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={[styles.contentContainer, contentStyle]}>
          {title ? (
            <BodyText style={[styles.title, titleStyle]}>{title}</BodyText>
          ) : null}
          {supportingText ? (
            <BodyText style={[styles.supportingText, supportingTextStyle]}>
              {supportingText}
            </BodyText>
          ) : null}
          {children}
          {actionItems ? this._renderActionItems() : null}
        </View>
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
