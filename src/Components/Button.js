import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';

import Ripple from '../Abstract/Ripple';

class Button extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onPress: PropTypes.func,
    textStyle: PropTypes.object,
    textColor: PropTypes.string,
    theme: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  render() {
    const {
      disabled,
      loading,
      children,
      onPress,
      style,
      theme,
      textStyle,
      textColor,
    } = this.props;

    const rippleColor = textColor ? textColor : theme.button.color;
    const styles = StyleSheet.create({
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.button,
        ...style,
      },
      text: {
        ...theme.buttonText,
        color: textColor ? textColor : theme.button.color,
        ...textStyle,
      },
    });

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor}
        style={styles.button}>
        <Text numberOfLines={1} style={styles.text}>
          {React.Children.map(children, child =>
            typeof child === 'string' ? child.toUpperCase() : child,
          )}
        </Text>
      </Ripple>
    );
  }
}

export default withTheme(Button);
