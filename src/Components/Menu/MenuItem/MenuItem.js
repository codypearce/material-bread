import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Text, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './MenuItem.styles';
import { Ripple, Hoverable } from '../../../';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
  };
  static defaultProps = {
    disabled: false,
    disabledTextColor: '#BDBDBD',
    underlayColor: '#E0E0E0',
  };
  state = {
    stateBackgroundColor: null,
  };
  handleHover(toggle) {
    const { disabled } = this.props;
    let implementedColor = toggle ? 'rgba(0,0,0,.12)' : null;
    if (disabled) implementedColor = null;

    this.setState({ stateBackgroundColor: implementedColor });
  }

  render() {
    const { children, disabled, onPress, style, textStyle } = this.props;
    const { stateBackgroundColor } = this.state;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <Ripple
          disabled={disabled}
          onPress={onPress}
          style={[
            styles.container,
            { backgroundColor: stateBackgroundColor },
            style,
          ]}>
          <Text
            ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
            numberOfLines={1}
            style={[
              styles.title,
              { color: disabled ? 'rgba(0,0,0,.50)' : 'rgba(0,0,0,.87)' },
              textStyle,
            ]}>
            {children}
          </Text>
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(MenuItem);
