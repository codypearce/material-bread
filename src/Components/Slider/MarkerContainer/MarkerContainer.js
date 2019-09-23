import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './MarkerContainer.styles';
import withTheme from '../../../Theme/withTheme';
import Marker from '../Marker/Marker';

class MarkerContainer extends Component {
  static propTypes = {
    pressed: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    theme: PropTypes.object,
    sliderLength: PropTypes.number,
    position: PropTypes.number,
    panResponder: PropTypes.object,
    onPress: PropTypes.func,
  };
  render() {
    const {
      sliderLength,
      position,
      pressed,
      disabled,
      color,
      panResponder,
      onPress,
    } = this.props;

    return (
      <View
        style={[
          styles.markerContainer,
          { top: -24, right: sliderLength - position - 24 },
        ]}>
        <View style={[styles.touch]} {...panResponder}>
          <Marker
            pressed={pressed}
            disabled={disabled}
            color={color}
            onPress={onPress}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(MarkerContainer);
