import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Ripple from './Ripple';

class RadioButton extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    radioButtonColor: PropTypes.string,
    radioButtonBorderColor: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const {
      checked,
      disabled,
      onPress,
      rippleColor,
      radioButtonColor,
      style,
    } = this.props;

    const rippleColorApplied = rippleColor ? rippleColor : 'rgba(0,0,0,.8)';
    let radioButtonColorApplied = radioButtonColor
      ? radioButtonColor
      : 'rgba(33, 150, 243, 1)';

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
              borderColor: checked ? radioButtonColorApplied : 'rgba(0,0,0,.5)',
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

const styles = StyleSheet.create({
  ripple: {
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 24,
    borderWidth: 2,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});

export default withTheme(RadioButton);
