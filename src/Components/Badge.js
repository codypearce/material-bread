import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';

class Badge extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.number,
    textColor: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    text: PropTypes.string,
    badgeContent: PropTypes.string,
    containerStyle: PropTypes.object,
  };
  render() {
    const {
      size,
      textColor,
      backgroundColor,
      style,
      theme,
      children,
      badgeContent,
      containerStyle,
      ...rest
    } = this.props;
    const realSize = size ? size : 16;

    return (
      <View
        style={[
          { position: 'relative' },
          { alignSelf: 'flex-start' },
          containerStyle,
        ]}>
        {children}
        <View
          style={[
            {
              height: realSize,
              width: realSize,
              borderRadius: realSize,
              backgroundColor: backgroundColor
                ? backgroundColor
                : theme.base.primary,

              alignItems: 'center',
              justifyContent: 'center',
              position: children ? 'absolute' : 'relative',
              top: children ? 0 : 'auto',
              right: children ? 0 : 'auto',
            },
            style,
          ]}
          numberOfLines={1}
          {...rest}>
          <Text
            style={[
              styles.content,
              {
                fontSize: realSize * 0.5,
                color: textColor ? textColor : 'white',
              },
            ]}>
            {badgeContent}
          </Text>
        </View>
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
