import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Ripple from './Ripple';

class Badge extends Component {
  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    size: PropTypes.number,
    style: PropTypes.object,
    position: PropTypes.string,
    onPress: PropTypes.func,

    theme: PropTypes.object,
    containerStyle: PropTypes.object,
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    position: 'right',
    size: 16,
    right: 0,
    left: 'auto',
  };
  state = {
    childrenWidth: 0,
    childrenHeight: 0,
  };

  getFontSize() {
    const { content, size } = this.props;
    let scaleFactor = 0.5;
    if (content && String(content).length > 3) {
      scaleFactor = 0.3;
    }
    return size * scaleFactor;
  }

  onChildrenLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      childrenWidth: width,
      childrenHeight: height,
    });
  };

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

    return (
      <View
        style={[
          {
            height: size,
            width: size,
            borderRadius: size,
            backgroundColor: color ? color : theme.base.primary,

            alignItems: 'center',
            justifyContent: 'center',
            position: children ? 'absolute' : 'relative',
            top: top ? top : 0,
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
              fontSize: this.getFontSize(),
              color: textColor ? textColor : 'white',
            },
          ]}>
          {content}
        </Text>
      </View>
    );
  }

  render() {
    const { children, containerStyle, onPress } = this.props;
    const { childrenHeight, childrenWidth } = this.state;
    return (
      <View
        style={[
          {
            position: 'relative',
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
            height: children ? childrenHeight : 'auto',
            width: children ? childrenWidth : 'auto',
            maxHeight: children ? childrenHeight : 'auto',
            maxWidth: children ? childrenWidth : 'auto',
            minHeight: children ? childrenHeight : 'auto',
            minWidth: children ? childrenWidth : 'auto',
          },
          containerStyle,
        ]}>
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

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Badge);
