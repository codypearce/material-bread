import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

import { Ripple, ProgressCircle } from '../../';
import styles from './Switch.styles';
import colorTool from 'color';

class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    trackStyle: PropTypes.object,
    thumbStyle: PropTypes.object,
    label: PropTypes.node,
    labelPos: PropTypes.string,
    theme: PropTypes.object,
    color: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = { labelPos: 'right' };

  state = {
    thumbTranslateX: new Animated.Value(0),
  };

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ thumbTranslateX: new Animated.Value(18) });
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
    const { checked } = this.props;

    let xValue = 18;
    if (!checked) {
      xValue = 0;
    }

    Animated.parallel([
      Animated.timing(thumbTranslateX, {
        toValue: xValue,
        duration: 300,
      }),
    ]).start();
  }

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
    } = this.props;

    let trackColor = color
      ? colorTool(color).alpha(0.54)
      : colorTool(theme.primary.main).alpha(0.54);
    let thumbColor = color ? color : theme.primary.main;

    return (
      <View style={[styles.container, style]}>
        {labelPos == 'left' && label ? this._renderLabel() : null}
        <Animated.View
          style={[
            styles.track,
            {
              backgroundColor:
                checked && !loading ? trackColor : 'rgba(0,0,0,.30)',
            },
            trackStyle,
          ]}
          onPress={onPress}>
          <Ripple
            rippleContainerBorderRadius={100}
            style={[
              styles.thumbRipple,
              { transform: [{ translateX: thumbTranslateX }] },
            ]}
            onPress={onPress}>
            <Animated.View
              style={[
                styles.thumb,
                { backgroundColor: checked && !loading ? thumbColor : 'white' },
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
