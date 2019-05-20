import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './Track.styles';

class Track extends Component {
  static propTypes = {
    twoMarkers: PropTypes.bool,
    sliderLength: PropTypes.number,
    positionOne: PropTypes.number,
    positionTwo: PropTypes.number,
    theme: PropTypes.object,
    trackColor: PropTypes.string,
    bothDisabled: PropTypes.bool,
    oneDisabled: PropTypes.bool,
  };

  render() {
    const {
      sliderLength,
      positionOne,
      positionTwo,
      twoMarkers,
      theme,
      trackColor,
      bothDisabled,
      oneDisabled,
    } = this.props;

    const selectedColor = trackColor ? trackColor : theme.primary.main;
    const unselectedColor = '#CECECE';

    const trackOneLength = positionOne;
    const trackThreeLength = twoMarkers ? sliderLength - positionTwo : 0;
    const trackTwoLength = sliderLength - trackOneLength - trackThreeLength;

    return (
      <Fragment>
        <View
          style={[
            styles.track,
            {
              width: trackOneLength,
              backgroundColor:
                twoMarkers || oneDisabled ? unselectedColor : selectedColor,
            },
          ]}
        />
        <View
          style={[
            styles.track,
            {
              width: trackTwoLength,
              backgroundColor:
                twoMarkers && !bothDisabled ? selectedColor : unselectedColor,
            },
          ]}
        />
        {twoMarkers && (
          <View
            style={[
              styles.track,
              {
                width: trackThreeLength,
                backgroundColor: twoMarkers ? unselectedColor : selectedColor,
              },
            ]}
          />
        )}
      </Fragment>
    );
  }
}

export default withTheme(Track);
