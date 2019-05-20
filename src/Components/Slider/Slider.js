import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PanResponder, View, I18nManager } from 'react-native';
import withTheme from '../../Theme/withTheme';
import MarkerContainer from './MarkerContainer/MarkerContainer';
import Track from './Track/Track';
import { createArray, valueToPosition, positionToValue } from './converts';
import styles from './Slider.styles';

class Slider extends Component {
  static propTypes = {
    values: PropTypes.array,
    sliderLength: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    disableOne: PropTypes.bool,
    disableTwo: PropTypes.bool,
    onValuesChange: PropTypes.func,
    onValuesChangeEnd: PropTypes.func,
    trackColor: PropTypes.string,
    markerColor: PropTypes.string,
    allowOverlap: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    values: [0],
    onValuesChange: () => {},
    onValuesChangeEnd: () => {},
    step: 1,
    min: 0,
    max: 100,
    sliderLength: 280,
    disableOne: false,
    disableTwo: false,
    allowOverlap: false,
    snapped: false,
    minMarkerOverlapDistance: 0,
  };

  constructor(props) {
    super(props);
    const { sliderLength, values, min, max, step } = this.props;

    this.optionsArray = createArray(min, max, step);
    this.stepLength = sliderLength / this.optionsArray.length;

    let initialValues = values.map(value =>
      valueToPosition(value, this.optionsArray, sliderLength),
    );

    let customPanResponder = (start, move, end) => {
      return PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => start(),
        onPanResponderMove: (evt, gestureState) => move(gestureState),
        onPanResponderTerminationRequest: () => false,
        onPanResponderRelease: (evt, gestureState) => end(gestureState),
        onPanResponderTerminate: (evt, gestureState) => end(gestureState),
        onShouldBlockNativeResponder: () => true,
      });
    };

    this._panResponderOne = customPanResponder(
      this.startMarkerLeft,
      this.moveMarkerLeft,
      this.endMarkerLeft,
    );
    this._panResponderTwo = customPanResponder(
      this.startMarkerRight,
      this.moveMarkerRight,
      this.endMarkerRight,
    );

    this.state = {
      pressedOne: true,
      valueOne: values[0],
      valueTwo: values[1],
      pastOne: initialValues[0],
      pastTwo: initialValues[1],
      positionOne: initialValues[0],
      positionTwo: initialValues[1],
    };
  }
  /* eslint-disable */
  componentWillReceiveProps(nextProps) {
    const { sliderLength, min, max, step } = this.props;
    const { onePressed, twoPressed, valueOne, valueTwo } = this.state;

    if (onePressed || twoPressed) {
      return;
    }

    let nextState = {};
    if (
      nextProps.min !== min ||
      nextProps.max !== max ||
      nextProps.step !== step ||
      nextProps.values[0] !== valueOne ||
      nextProps.sliderLength !== sliderLength ||
      nextProps.values[1] !== valueTwo ||
      (nextProps.sliderLength !== sliderLength && nextProps.values[1])
    ) {
      this.optionsArray = createArray(
        nextProps.min,
        nextProps.max,
        nextProps.step,
      );

      this.stepLength = sliderLength / this.optionsArray.length;

      var positionOne = valueToPosition(
        nextProps.values[0],
        this.optionsArray,
        nextProps.sliderLength,
      );
      nextState.valueOne = nextProps.values[0];
      nextState.pastOne = positionOne;
      nextState.positionOne = positionOne;

      var positionTwo = valueToPosition(
        nextProps.values[1],
        this.optionsArray,
        nextProps.sliderLength,
      );
      nextState.valueTwo = nextProps.values[1];
      nextState.pastTwo = positionTwo;
      nextState.positionTwo = positionTwo;
    }

    if (nextState != {}) {
      this.setState(nextState);
    }
  }

  startMarkerLeft = () => {
    const { disableOne } = this.props;
    const { onePressed } = this.state;

    if (!disableOne) {
      this.setState({
        onePressed: !onePressed,
      });
    }
  };

  startMarkerRight = () => {
    const { disableTwo } = this.props;
    const { twoPressed } = this.state;

    if (!disableTwo) {
      this.setState({
        twoPressed: !twoPressed,
      });
    }
  };

  moveMarkerLeft = gestureState => {
    const {
      disableOne,
      allowOverlap,
      sliderLength,
      onValuesChange,
    } = this.props;
    const { pastOne, positionTwo, valueOne, valueTwo } = this.state;

    if (disableOne) {
      return;
    }

    const accumDistance = gestureState.dx;

    const unconfined = I18nManager.isRTL
      ? pastOne - accumDistance
      : accumDistance + pastOne;

    var bottom = 0;
    var trueTop = positionTwo - (allowOverlap ? 0 : this.stepLength);
    var top = trueTop === 0 ? 0 : trueTop || sliderLength;
    var confined =
      unconfined < bottom ? bottom : unconfined > top ? top : unconfined;

    var value = positionToValue(confined, this.optionsArray, sliderLength);

    this.setState({
      positionOne: confined,
    });

    if (value !== valueOne) {
      this.setState(
        {
          valueOne: value,
        },
        () => {
          var change = [valueOne];
          if (valueTwo) {
            change.push(valueTwo);
          }
          onValuesChange(change);
        },
      );
    }
  };

  moveMarkerRight = gestureState => {
    const {
      disableTwo,
      allowOverlap,
      sliderLength,
      onValuesChange,
    } = this.props;
    const { pastTwo, positionOne, valueOne, valueTwo } = this.state;

    if (disableTwo) {
      return;
    }

    const accumDistance = gestureState.dx;

    const unconfined = I18nManager.isRTL
      ? pastTwo - accumDistance
      : accumDistance + pastTwo;
    var bottom = positionOne + (allowOverlap ? 0 : this.stepLength);
    var top = sliderLength;
    var confined =
      unconfined < bottom ? bottom : unconfined > top ? top : unconfined;

    var value = positionToValue(confined, this.optionsArray, sliderLength);

    this.setState({
      positionTwo: confined,
    });

    if (value !== valueTwo) {
      this.setState(
        {
          valueTwo: value,
        },
        () => {
          onValuesChange([valueOne, valueTwo]);
        },
      );
    }
  };

  endMarkerLeft = () => {
    const { onValuesChangeEnd } = this.props;
    const { positionOne, onePressed, valueOne, valueTwo } = this.state;
    this.setState(
      {
        pastOne: positionOne,
        onePressed: !onePressed,
      },
      () => {
        var change = [valueOne];
        if (valueTwo) {
          change.push(valueTwo);
        }
        onValuesChangeEnd(change);
      },
    );
  };

  endMarkerRight = () => {
    const { twoPressed, positionTwo, valueOne, valueTwo } = this.state;

    this.setState(
      {
        twoPressed: !twoPressed,
        pastTwo: positionTwo,
      },
      () => {
        this.props.onValuesChangeEnd([valueOne, valueTwo]);
      },
    );
  };

  _renderMarkerRight() {
    const { sliderLength, disableTwo, markerColor, onPress } = this.props;
    const { positionTwo, twoPressed } = this.state;

    return (
      <MarkerContainer
        sliderLength={sliderLength}
        position={positionTwo}
        pressed={twoPressed}
        disabled={disableTwo}
        panResponder={this._panResponderTwo.panHandlers}
        color={markerColor}
        onPress={onPress}
      />
    );
  }

  _renderMarkerLeft() {
    const { sliderLength, disableOne, markerColor, onPress } = this.props;
    const { positionOne, onePressed } = this.state;

    return (
      <MarkerContainer
        sliderLength={sliderLength}
        position={positionOne}
        pressed={onePressed}
        disabled={disableOne}
        panResponder={this._panResponderOne.panHandlers}
        color={markerColor}
        onPress={onPress}
      />
    );
  }

  _renderTracks() {
    const {
      sliderLength,
      values,
      trackColor,
      disableOne,
      disableTwo,
    } = this.props;
    const { positionOne, positionTwo } = this.state;

    return (
      <Track
        twoMarkers={values.length == 2}
        sliderLength={sliderLength}
        positionTwo={positionTwo}
        positionOne={positionOne}
        trackColor={trackColor}
        bothDisabled={disableOne && disableTwo}
        oneDisabled={disableOne}
      />
    );
  }

  render() {
    const { sliderLength, values, style } = this.props;
    const twoMarkers = values.length == 2;

    return (
      <View style={[styles.container, style]}>
        <View style={[styles.fullTrack, { width: sliderLength }]}>
          {this._renderTracks()}
          {this._renderMarkerLeft()}
          {twoMarkers ? this._renderMarkerRight() : null}
        </View>
      </View>
    );
  }
}

export default withTheme(Slider);
