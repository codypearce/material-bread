import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import withTheme from '../../../Theme/withTheme';
import { BodyText, Caption, Ripple } from '../../..';
import styles from './ListItem.styles';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    text: PropTypes.string,
    secondaryText: PropTypes.string,
    media: PropTypes.node,
    icon: PropTypes.node,
    actionItem: PropTypes.node,
    leadingActionItem: PropTypes.node,
    textStyle: PropTypes.object,
  };

  _renderText() {
    const { text, secondaryText, disabled, textStyle } = this.props;

    return (
      <View style={{ alignItems: 'flex-start' }}>
        <BodyText
          style={[
            styles.listItemText,
            { color: disabled ? 'rgba(0,0,0,0.47)' : 'rgba(0,0,0,0.87)' },
            textStyle,
          ]}>
          {text}
        </BodyText>
        {secondaryText ? (
          <Caption style={styles.listItemSecondaryText}>
            {secondaryText}
          </Caption>
        ) : null}
      </View>
    );
  }

  _renderIcon() {
    const { icon } = this.props;
    return React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 16,
      color: icon.props.color ? icon.props.color : '#6e6e6e',
    });
  }

  _renderActionitem() {
    const { actionItem } = this.props;

    return (
      <Fragment>
        <View style={{ flex: 1 }} />
        {actionItem}
      </Fragment>
    );
  }

  _renderLeadingActionItem() {
    const { leadingActionItem } = this.props;
    return leadingActionItem;
  }

  render() {
    const {
      style,
      onPress,
      disabled,
      selected,
      children,
      media,
      icon,
      actionItem,
      leadingActionItem,
    } = this.props;

    let contentMargin = media ? 16 : 0;
    if (icon || leadingActionItem) contentMargin = 32;

    return (
      <Ripple
        onAnimationEnd={onPress}
        rippleDuration={200}
        disabled={disabled}
        rippleColor={'rgba(0,0,0,.8)'}
        style={[
          {
            backgroundColor: selected ? '#eee' : '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingVertical: 12,
            width: '100%',
            zIndex: 1,
          },
          style,
        ]}>
        {leadingActionItem ? this._renderLeadingActionItem() : null}
        {icon ? this._renderIcon() : null}
        {media ? media : null}
        <View style={{ marginLeft: contentMargin }}>
          {children ? children : this._renderText()}
        </View>
        {actionItem ? this._renderActionitem() : null}
      </Ripple>
    );
  }
}

export default withTheme(ListItem);
