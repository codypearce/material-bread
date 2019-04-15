import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  };
  render() {
    const { style, onPress, disabled, selected } = this.props;
    return (
      <Ripple
        onAnimationEnd={onPress}
        rippleDuration={200}
        disabled={disabled}
        rippleColor={'rgba(0,0,0,.8)'}
        style={[
          {
            backgroundColor: selected ? '#eee' : '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            width: '100%',
          },
          style,
        ]}>
        {this.props.children}
      </Ripple>
    );
  }
}

export default withTheme(ListItem);
