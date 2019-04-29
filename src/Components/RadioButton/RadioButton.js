import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Ripple from '../Ripple/Ripple';
import styles from './RadioButton.styles';

class RadioButton extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    radioButtonColor: PropTypes.string,
    uncheckedBorderColor: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const {
      checked,
      disabled,
      onPress,
      rippleColor,
      radioButtonColor,
      uncheckedBorderColor,
      style,
    } = this.props;

    const rippleColorApplied = rippleColor ? rippleColor : 'rgba(0,0,0,.8)';
    let radioButtonColorApplied = radioButtonColor
      ? radioButtonColor
      : 'rgba(33, 150, 243, 1)';
    let uncheckedBorderColorApplied = uncheckedBorderColor
      ? uncheckedBorderColor
      : 'rgba(0,0,0,.5)';

    if (disabled) {
      radioButtonColorApplied = 'rgba(0,0,0,.5)';
    }

    return (
      <Ripple
        rippleColor={rippleColorApplied}
        rippleContainerBorderRadius={18}
        onPress={onPress}
        style={[styles.ripple, style]}
        rippleCentered={true}
        disabled={disabled}>
        <Animated.View
          style={[
            styles.radio,
            {
              borderColor: checked
                ? radioButtonColorApplied
                : uncheckedBorderColorApplied,
            },
          ]}>
          {checked ? (
            <Animated.View
              style={[
                styles.radioDot,
                { backgroundColor: radioButtonColorApplied },
              ]}
            />
          ) : null}
        </Animated.View>
      </Ripple>
    );
  }
}

export default withTheme(RadioButton);
