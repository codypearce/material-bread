import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Icon from '../../Icon/Icon';

class ListItemIcon extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    icon: PropTypes.string,
  };
  render() {
    const { style, icon } = this.props;
    return (
      <Icon
        name={icon}
        size={16}
        color={'blue'}
        style={[{ marginRight: 32 }, style]}
      />
    );
  }
}

export default withTheme(ListItemIcon);
