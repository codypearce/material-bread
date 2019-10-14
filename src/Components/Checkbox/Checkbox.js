import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import Ripple from '../Ripple/Ripple';
import withTheme from '../../Theme/withTheme';
import styles from './Checkbox.styles';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    checkboxColor: PropTypes.string,
    unCheckedColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    checkboxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    rippleMatchesCheckbox: PropTypes.bool,
    indeterminate: PropTypes.bool,

    label: PropTypes.string,
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    labelPos: PropTypes.string,

    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    size: PropTypes.number,
    checkedIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

    ios: PropTypes.bool,

    error: PropTypes.bool,
    testID: PropTypes.string,
  };

  static defaultProps = {
    unCheckedColor: 'rgba(0,0,0,.5)',
    rippleColor: 'rgba(0,0,0,.8)',
    icon: 'check-box-outline-blank',
    size: 24,
    checkedIcon: 'check-box',
    labelPos: 'right',
  };

  _getRippleColor() {
    const { rippleColor, rippleMatchesCheckbox, error, theme } = this.props;
    const checkboxColor = this._getCheckBoxColor();

    let rippleColorApplied = rippleColor;

    if (rippleMatchesCheckbox) rippleColorApplied = checkboxColor;

    if (error) rippleColorApplied = theme.error.main;

    return rippleColorApplied;
  }

  _getCheckBoxColor() {
    const { disabled, checkboxColor, theme, error } = this.props;
    let checkboxColorApplied = checkboxColor
      ? checkboxColor
      : theme.primary.main;

    if (error) checkboxColorApplied = theme.error.main;

    if (disabled) checkboxColorApplied = 'rgba(0,0,0,.5)';

    return checkboxColorApplied;
  }

  _renderLabel() {
    const { label, labelStyle, onPress } = this.props;
    if (!label) return null;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _renderIconContainer() {
    const { disabled, onPress, checkboxStyle, size } = this.props;

    const rippleColor = this._getRippleColor();
    const rippleSize = 1.5 * size;

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.checkBoxRipple,
          checkboxStyle,
          { width: rippleSize, height: rippleSize, padding: rippleSize / 6 },
        ]}
        rippleCentered={true}
        rippleColor={rippleColor}
        rippleContainerBorderRadius={rippleSize / 2}>
        {this._renderIcon()}
      </Ripple>
    );
  }

  _renderIcon() {
    const {
      icon,
      size,
      checkedIcon,
      unCheckedColor,
      indeterminate,
      checked,
      ios,
      theme,
      error,
    } = this.props;

    const checkboxColor = this._getCheckBoxColor();

    if (icon && icon.props && icon.props.name && !checked) {
      return React.cloneElement(icon, {
        size: icon.props.size ? icon.props.size : size,
        color: checkboxColor,
      });
    } else if (
      checkedIcon &&
      checkedIcon.props &&
      checkedIcon.props.name &&
      checked
    ) {
      return React.cloneElement(checkedIcon, {
        size: icon.props.size ? icon.props.size : size,
        color: checkboxColor,
      });
    }

    let iconName = indeterminate ? 'indeterminate-check-box' : checkedIcon;
    let opacity = 1;

    if (ios && !indeterminate && checked) iconName = 'done';

    if (!checked) iconName = icon;

    if (!checked && ios) opacity = 0;

    let unCheckedColorApplied = unCheckedColor;

    if (error) unCheckedColorApplied = theme.error.main;

    return (
      <Icon
        name={iconName}
        size={size}
        color={checked ? checkboxColor : unCheckedColorApplied}
        style={{ opacity }}
      />
    );
  }

  render() {
    const { style, labelPos, testID } = this.props;

    return (
      <View style={[styles.container, style]} testID={testID}>
        {labelPos === 'left' ? this._renderLabel() : null}
        {this._renderIconContainer()}
        {labelPos === 'right' ? this._renderLabel() : null}
      </View>
    );
  }
}

export default withTheme(Checkbox);
