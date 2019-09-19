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
    markerSize: PropTypes.number,
    trackHeight: PropTypes.number,
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
      markerSize,
      trackHeight,
    } = this.props;

    return (
      <View
        style={[
          styles.markerContainer,
          {
            top: -markerSize * 2 + trackHeight / 2,
            right: sliderLength - position - markerSize * 2,
            height: markerSize * 4,
            width: markerSize * 4,
          },
        ]}>
        <View style={[styles.touch]} {...panResponder}>
          <Marker
            pressed={pressed}
            disabled={disabled}
            color={color}
            onPress={onPress}
            markerSize={markerSize}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(MarkerContainer);
