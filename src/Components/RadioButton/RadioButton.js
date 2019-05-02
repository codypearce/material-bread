import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, TouchableWithoutFeedback, View, Text } from 'react-native';
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

    label: PropTypes.string,
    labelStyle: PropTypes.object,
    labelPos: PropTypes.string,

    error: PropTypes.bool,
    theme: PropTypes.object,
  };

  static defaultProps = {
    labelPos: 'right',
  };

  _renderLabel() {
    const { label, labelStyle, onPress } = this.props;
    if (!label) return null;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const {
      checked,
      disabled,
      onPress,
      rippleColor,
      radioButtonColor,
      uncheckedBorderColor,
      style,
      labelPos,
      error,
      theme,
    } = this.props;

    const rippleColorApplied = rippleColor ? rippleColor : 'rgba(0,0,0,.8)';
    let radioButtonColorApplied = radioButtonColor
      ? radioButtonColor
      : 'rgba(33, 150, 243, 1)';
    let uncheckedBorderColorApplied = uncheckedBorderColor
      ? uncheckedBorderColor
      : 'rgba(0,0,0,.5)';

    if (error) {
      radioButtonColorApplied = theme.error.main;
      uncheckedBorderColorApplied = theme.error.main;
    }
    if (disabled) {
      radioButtonColorApplied = 'rgba(0,0,0,.5)';
    }

    return (
      <View style={[styles.container, style]}>
        {labelPos === 'left' ? this._renderLabel() : null}
        <Ripple
          rippleColor={rippleColorApplied}
          rippleContainerBorderRadius={18}
          onPress={onPress}
          style={[styles.ripple]}
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
        {labelPos === 'right' ? this._renderLabel() : null}
      </View>
    );
  }
}

export default withTheme(RadioButton);
