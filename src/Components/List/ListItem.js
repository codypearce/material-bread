import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../../Abstract/Ripple';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
  };
  render() {
    const { style, onPress, disabled } = this.props;
    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        rippleColor={'rgba(0,0,0,.8)'}
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          width: '100%',
          ...style,
        }}>
        {this.props.children}
      </Ripple>
    );
  }
}

export default withTheme(ListItem);
