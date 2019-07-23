import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import withTheme from '../../../Theme/withTheme';
import BodyText from '../../Typography/BodyText/BodyText.js';
import Caption from '../../Typography/Caption/Caption.js';
import Ripple from '../../Ripple/Ripple.js';
import Hoverable from '../../../Utils/Hoverable/Hoverable.js';
import color from 'color';
import styles from './ListItem.styles';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    text: PropTypes.string,
    secondaryText: PropTypes.string,
    media: PropTypes.node,
    icon: PropTypes.node,
    actionItem: PropTypes.node,
    leadingActionItem: PropTypes.node,
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    secondaryTextStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    rippleProps: PropTypes.object,
    backgroundColor: PropTypes.string,
  };

  state = {
    stateBackgroundColor: null,
  };

  _renderText() {
    const {
      text,
      secondaryText,
      disabled,
      textStyle,
      secondaryTextStyle,
    } = this.props;

    return (
      <View style={{ alignItems: 'flex-start' }} ellipsizeMode="tail">
        <BodyText
          style={[
            styles.listItemText,
            { color: disabled ? 'rgba(0,0,0,0.47)' : 'rgba(0,0,0,0.87)' },
            textStyle,
          ]}
          ellipsizeMode="tail">
          {text}
        </BodyText>
        {secondaryText ? (
          <Caption
            style={[
              styles.listItemSecondaryText,
              { color: 'rgba(0,0,0,0.57)' },
              secondaryTextStyle,
            ]}>
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

  getBackgroundColor = () => {
    const { backgroundColor, disabled } = this.props;
    const { stateBackgroundColor } = this.state;

    let implementedBackgroundColor = backgroundColor
      ? backgroundColor
      : 'transparent';

    implementedBackgroundColor = stateBackgroundColor
      ? stateBackgroundColor
      : implementedBackgroundColor;

    return disabled ? 'transparent' : implementedBackgroundColor;
  };

  handleHover(toggle) {
    const { rippleProps } = this.props;

    const hoveredColor =
      rippleProps && rippleProps.rippleColor
        ? color(rippleProps.rippleColor)
            .alpha(0.12)
            .rgb()
            .string()
        : 'rgba(0,0,0,.8)';

    const stateBackgroundColor = toggle ? hoveredColor : 'transparent';

    this.setState({ stateBackgroundColor: stateBackgroundColor });
  }

  render() {
    const {
      style,
      onPress,
      disabled,
      children,
      media,
      icon,
      actionItem,
      leadingActionItem,
      rippleProps,
    } = this.props;

    let contentMargin = media ? 16 : 0;
    if (icon || leadingActionItem) contentMargin = 32;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <Ripple
          onAnimationEnd={onPress}
          rippleDuration={200}
          disabled={disabled}
          rippleColor={'rgba(0,0,0,.8)'}
          style={[
            {
              backgroundColor: this.getBackgroundColor(),
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
          ]}
          {...rippleProps}>
          {leadingActionItem ? this._renderLeadingActionItem() : null}
          {icon ? this._renderIcon() : null}
          {media ? media : null}
          <View style={{ marginLeft: contentMargin }}>
            {children ? children : this._renderText()}
          </View>
          {actionItem ? this._renderActionitem() : null}
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(ListItem);
