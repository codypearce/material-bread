import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Linking,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Anchor extends Component {
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.string,
  };

  handlePress = () => {
    Linking.openURL(this.props.url);
  };

  render() {
    const { url, children, target } = this.props;

    if (Platform.OS === 'web') {
      return (
        <TouchableWithoutFeedback
          href={url}
          accessibilityRole="link"
          target={target ? target : '_self'}>
          <View>{children}</View>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        {children}
      </TouchableWithoutFeedback>
    );
  }
}
