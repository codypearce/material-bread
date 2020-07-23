import React, { Component } from 'react';
import {
  Animated,
  I18nManager,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

import Ripple from '../Ripple/Ripple.js';
import ProgressCircle from '../Progress/ProgressCircle/ProgressCircle.js';
import styles from './Switch.styles';
import colorTool from 'color';

class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    thumbStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.node,
    labelPos: PropTypes.string,
    theme: PropTypes.object,
    color: PropTypes.string,
    loading: PropTypes.bool,
    testID: PropTypes.string,
    width: PropTypes.number,
  };

  static defaultProps = { labelPos: 'right', width: 36 };

  state = {
    thumbTranslateX: new Animated.Value(0),
  };

  componentDidMount() {
    const { checked, width } = this.props;
    const { thumbTranslateX } = this.state;

    if (checked) {
      const xValue = width / 2;
      thumbTranslateX.setValue(I18nManager.isRTL ? -xValue : xValue);
    }
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props;
    if (checked != prevProps.checked) {
      this.handleSwitch();
    }
  }

  _renderLabel() {
    const { label, labelPos, onPress } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <View
          style={{
            marginLeft: labelPos == 'right' ? 8 : 0,
            marginRight: labelPos == 'left' ? 8 : 0,
          }}>
          {label}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  handleSwitch() {
    const { thumbTranslateX } = this.state;
    const { checked, width } = this.props;

    let xValue = width / 2;
    if (!checked) {
      xValue = 0;
    }

    Animated.parallel([
      Animated.timing(thumbTranslateX, {
        toValue: I18nManager.isRTL ? -xValue : xValue,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }

  getDimensions = width => {
    const height = width * (8 / 9);

    return {
      height,
      trackDimensions: {
        width,
        height: height * (7 / 16),
        borderRadius: height * (5 / 16),
      },
      thumbRippleDimensions: {
        width: width * (8 / 9),
        top: height * -(9 / 32),
        left: width * -(2 / 9),
      },
      thumbDimensions: {
        width: width * (5 / 9),
        height: height * (5 / 8),
      },
    };
  };

  render() {
    const { thumbTranslateX } = this.state;
    const {
      label,
      labelPos,
      style,
      trackStyle,
      thumbStyle,
      theme,
      color,
      checked,
      onPress,
      loading,
      testID,
      width,
      ...rest
    } = this.props;

    let trackColor = color
      ? colorTool(color).alpha(0.54)
      : colorTool(theme.primary.main).alpha(0.54);
    let thumbColor = color ? color : theme.primary.main;

    const {
      height,
      trackDimensions,
      thumbRippleDimensions,
      thumbDimensions,
    } = this.getDimensions(width);

    return (
      <View style={[styles.container, style]} testID={testID} {...rest}>
        {labelPos == 'left' && label ? this._renderLabel() : null}
        <Animated.View
          useNativeDriver={true}
          style={[
            styles.track,
            {
              backgroundColor:
                checked && !loading ? trackColor : 'rgba(0, 0, 0, 0.3)',
              ...trackDimensions,
            },
            trackStyle,
          ]}
          onPress={onPress}>
          <Ripple
            rippleContainerBorderRadius={100}
            style={[
              styles.thumbRipple,
              {
                transform: [{ translateX: thumbTranslateX }],
                height,
                ...thumbRippleDimensions,
              },
            ]}
            onPress={onPress}>
            <Animated.View
              useNativeDriver={true}
              style={[
                styles.thumb,
                {
                  backgroundColor: checked && !loading ? thumbColor : 'white',
                  ...thumbDimensions,
                },
                thumbStyle,
              ]}>
              {loading ? (
                <ProgressCircle
                  color={thumbColor}
                  size={14}
                  widthOfBorder={6}
                />
              ) : null}
            </Animated.View>
          </Ripple>
        </Animated.View>
        {labelPos == 'right' && label ? this._renderLabel() : null}
      </View>
    );
  }
}

export default withTheme(Switch);
