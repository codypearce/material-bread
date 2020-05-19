import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Ripple from '../Ripple/Ripple';
import styles from './Badge.styles';

class Badge extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxValue: PropTypes.number,
    children: PropTypes.node,
    size: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    position: PropTypes.string,
    onPress: PropTypes.func,

    theme: PropTypes.object,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    visible: PropTypes.bool,
    testID: PropTypes.string,
  };

  static defaultProps = {
    position: 'right',
    size: 16,
    right: 0,
    left: 'auto',
    visible: true,
  };

  state = {
    childrenWidth: 0,
    childrenHeight: 0,
    scale: new Animated.Value(0),
  };

  componentDidMount() {
    const { visible } = this.props;

    if (visible) {
      this._animateBadge();
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible != prevProps.visible) {
      this._animateBadge();
    }
  }

  getFontSize(content, maxed) {
    const { size } = this.props;
    let scaleFactor = 0.5;
    if (content && String(content).length > 3 && !maxed) {
      scaleFactor = 0.3;
    }
    return size * scaleFactor;
  }

  getBadgeWidth(content) {
    const { size } = this.props;
    const isLong = String(content).length > 3;
    let scaleFactor = isLong ? 1.75 : 1.5;

    return scaleFactor * size;
  }

  onChildrenLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      childrenWidth: width,
      childrenHeight: height,
    });
  };

  _animateBadge() {
    const { visible } = this.props;
    const { scale } = this.state;

    const scaleValue = visible ? 1 : 0;

    Animated.spring(scale, {
      toValue: scaleValue,
      speed: 7,
      useNativeDriver: true,
    }).start();
  }

  _renderBadge() {
    const {
      size,
      textColor,
      color,
      style,
      theme,
      children,
      content,
      position,
      right,
      left,
      top,
      maxValue = 0,
      ...rest
    } = this.props;

    let positionStyle = {
      right: children ? 0 : 'auto',
    };

    if (position === 'left') {
      positionStyle = {
        left: children ? 0 : 'auto',
      };
    }

    if (right) positionStyle.right = right;
    if (left) positionStyle.left = left;

    let maxedContent = parseInt(content, 10);
    const maxed = !isNaN(maxedContent) && maxValue && maxedContent > maxValue;
    maxedContent = maxed ? `${maxValue}+` : content;

    return (
      <Animated.View
        useNativeDriver={true}
        style={[
          {
            height: size,
            width: maxed ? this.getBadgeWidth(maxedContent) : size,
            borderRadius: size,
            backgroundColor: color ? color : theme.primary.main,

            alignItems: 'center',
            justifyContent: 'center',
            position: children ? 'absolute' : 'relative',
            top: top ? top : 0,
            transform: [{ scale: this.state.scale }],
          },
          positionStyle,
          style,
        ]}
        numberOfLines={1}
        {...rest}>
        <Text
          style={[
            styles.content,
            {
              fontSize: this.getFontSize(maxedContent, maxed),
              color: textColor ? textColor : 'white',
            },
          ]}>
          {maxedContent}
        </Text>
      </Animated.View>
    );
  }

  render() {
    const { children, containerStyle, onPress, testID } = this.props;
    const { childrenHeight, childrenWidth } = this.state;

    return (
      <View
        style={[
          {
            position: 'relative',
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            height: children ? childrenHeight : 'auto',
            width: children ? childrenWidth : 'auto',
            maxHeight: children ? childrenHeight : 'auto',
            maxWidth: children ? childrenWidth : 'auto',
            minHeight: children ? childrenHeight : 'auto',
            minWidth: children ? childrenWidth : 'auto',
          },
          containerStyle,
        ]}
        testID={testID}>
        <View onLayout={this.onChildrenLayout}>{children}</View>
        {onPress ? (
          <Ripple onPress>{this._renderBadge()}</Ripple>
        ) : (
          this._renderBadge()
        )}
      </View>
    );
  }
}

export default withTheme(Badge);
