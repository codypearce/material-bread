import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './Track.styles';

class Track extends Component {
  static propTypes = {
    backgroundTrackColor: PropTypes.string,
    twoMarkers: PropTypes.bool,
    sliderLength: PropTypes.number,
    positionOne: PropTypes.number,
    positionTwo: PropTypes.number,
    theme: PropTypes.object,
    trackColor: PropTypes.string,
    bothDisabled: PropTypes.bool,
    oneDisabled: PropTypes.bool,
    trackHeight: PropTypes.number,
    trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  render() {
    const {
      backgroundTrackColor,
      sliderLength,
      positionOne,
      positionTwo,
      twoMarkers,
      theme,
      trackColor,
      bothDisabled,
      oneDisabled,
      trackHeight,
      trackStyle,
    } = this.props;

    const selectedColor = trackColor ? trackColor : theme.primary.main;
    const unselectedColor = backgroundTrackColor
      ? backgroundTrackColor
      : '#CECECE';

    const trackOneLength = positionOne;
    const trackThreeLength = twoMarkers ? sliderLength - positionTwo : 0;
    const trackTwoLength = sliderLength - trackOneLength - trackThreeLength;

    const commonStyles = [styles.track, trackStyle, { height: trackHeight }];

    return (
      <Fragment>
        <View
          style={[
            ...commonStyles,
            {
              width: trackOneLength,
              backgroundColor:
                twoMarkers || oneDisabled ? unselectedColor : selectedColor,
            },
          ]}
        />
        <View
          style={[
            ...commonStyles,
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
              ...commonStyles,
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
