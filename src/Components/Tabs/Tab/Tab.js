import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Ripple } from '../../../';
import withTheme from '../../../Theme/withTheme';
import styles from './Tab.styles';

class Tab extends Component {
  static propTypes = {
    content: PropTypes.string,
    active: PropTypes.bool,
    activeTextColor: PropTypes.string,
    inActiveTextColor: PropTypes.string,
    textStyle: PropTypes.object,
    onPress: PropTypes.func,
    tabWidth: PropTypes.number,
    style: PropTypes.object,
  };

  static defaultProps = {
    inActiveTextColor: 'rgba(255, 255, 255, 0.7)',
    activeTextColor: '#fff',
  };

  _renderTab() {
    const {
      content,
      active,
      activeTextColor,
      inActiveTextColor,
      textStyle,
    } = this.props;

    const color = active ? activeTextColor : inActiveTextColor;

    return (
      <Text
        style={[
          styles.text,
          {
            color: color,
          },
          textStyle,
        ]}>
        {content ? content.toUpperCase() : null}
      </Text>
    );
  }

  render() {
    const { onPress, tabWidth, style } = this.props;

    return (
      <Ripple onPress={onPress} style={[{ width: tabWidth }, style]}>
        <View style={styles.container}>{this._renderTab()}</View>
      </Ripple>
    );
  }
}

export default withTheme(Tab);
