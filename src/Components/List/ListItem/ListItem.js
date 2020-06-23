import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';

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
    textProps: PropTypes.object,
    secondaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    secondaryTextProps: PropTypes.object,
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
    isPressed: false,
  };

  _renderText() {
    const {
      text,
      textProps = {},
      secondaryText,
      secondaryTextProps = {},
      disabled,
      textStyle,
      secondaryTextStyle,
    } = this.props;

    return (
      <View style={{ alignItems: 'flex-start' }} ellipsizeMode="tail">
        <BodyText
          style={[
            styles.listItemText,
            { color: disabled ? 'rgba(0,0,0,0.47)' : 'rgba(0,0,0,1)' },
            textStyle,
          ]}
          numberOfLines={1}
          {...textProps}>
          {text}
        </BodyText>
        {typeof secondaryText === 'string' ? (
          <Caption
            style={[
              styles.listItemSecondaryText,
              { color: 'rgba(0,0,0,0.57)' },
              secondaryTextStyle,
            ]}
            numberOfLines={2}
            {...secondaryTextProps}>
            {secondaryText}
          </Caption>
        ) : (
          secondaryText
        )}
      </View>
    );
  }

  _renderIcon() {
    const { icon } = this.props;
    return React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 24,
      color: icon.props.color ? icon.props.color : 'rgba(0, 0, 0, 0.54)',
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
    const { backgroundColor, selected, disabled, rippleProps } = this.props;
    const { stateBackgroundColor } = this.state;

    let implementedBackgroundColor = backgroundColor
      ? backgroundColor
      : 'transparent';

    implementedBackgroundColor = stateBackgroundColor
      ? stateBackgroundColor
      : implementedBackgroundColor;

    const rippleColor =
      rippleProps && rippleProps.rippleColor
        ? color(rippleProps.rippleColor)
            .alpha(0.12)
            .rgb()
            .string()
        : 'rgba(0, 0, 0, 0.12)';

    implementedBackgroundColor = selected
      ? rippleColor
      : implementedBackgroundColor;

    return disabled ? 'transparent' : implementedBackgroundColor;
  };

  handleHover(toggle) {
    const { rippleProps } = this.props;
    let bgColor = this.getBackgroundColor();
    let implementedColor;

    if (bgColor == 'transparent') {
      implementedColor = toggle ? 'rgba(0, 0, 0, 0.12)' : null;
    } else {
      if (color(bgColor).isDark()) {
        implementedColor = toggle
          ? color(bgColor)
              .lighten(0.15)
              .rgb()
              .string()
          : null;
      } else {
        implementedColor = toggle
          ? color(bgColor)
              .darken(0.15)
              .rgb()
              .string()
          : null;
      }
    }

    if (rippleProps && rippleProps.rippleColor) {
      implementedColor = toggle
        ? color(rippleProps.rippleColor)
            .alpha(0.12)
            .rgb()
            .string()
        : null;
    }

    this.setState({ stateBackgroundColor: implementedColor });
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
      ...rest
    } = this.props;
    const { isPressed } = this.state;

    let contentMargin = media ? 16 : 0;
    if (icon || leadingActionItem) contentMargin = 32;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <Ripple
          onAnimationEnd={() => {
            if (isPressed && onPress) {
              onPress();
              this.setState({ isPressed: false });
            }
          }}
          rippleDuration={200}
          disabled={disabled}
          rippleColor={'rgba(0,0,0,.8)'}
          onPress={() => this.setState({ isPressed: true })}
          style={[
            {
              backgroundColor: this.getBackgroundColor(),
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              width: Platform.OS === 'web' ? 416 : '100%',
              zIndex: 1,
            },
            style,
          ]}
          {...rippleProps}
          {...rest}>
          {leadingActionItem ? this._renderLeadingActionItem() : null}
          {icon ? this._renderIcon() : null}
          {media ? media : null}
          <View
            style={{
              alignSelf: 'center',
              marginLeft: contentMargin,
              flexShrink: 1,
            }}>
            {children ? children : this._renderText()}
          </View>
          {actionItem ? this._renderActionitem() : null}
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(ListItem);
