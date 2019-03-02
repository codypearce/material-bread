import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Icon from './Icon';
import Ripple from '../Abstract/Ripple';
import withTheme from '../Theme/withTheme';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    checkboxColor: PropTypes.string,
    checkboxBorderColor: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const {
      checked,
      disabled,
      onPress,
      rippleColor,
      checkboxColor,
      checkboxBorderColor,
      style,
    } = this.props;

    const rippleColorApplied = rippleColor ? rippleColor : 'rgba(0,0,0,.8)';
    let checkboxColorApplied = checkboxColor
      ? checkboxColor
      : 'rgba(33, 150, 243, 1)';
    let checkboxBorderColorApplied = checkboxBorderColor
      ? checkboxBorderColor
      : 'rgba(0,0,0,.5)';
    let icon = checked ? 'check-box' : 'check-box-outline-blank';

    if (disabled) {
      checkboxColorApplied = 'rgba(0,0,0,.5)';
    }

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        style={[styles.container, style]}
        rippleCentered={true}
        rippleColor={rippleColorApplied}
        rippleContainerBorderRadius={18}>
        <Icon
          name={icon}
          size={24}
          color={checked ? checkboxColorApplied : checkboxBorderColorApplied}
        />
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    width: 36,
    height: 36,
    padding: 6,
  },
});

export default withTheme(Checkbox);
