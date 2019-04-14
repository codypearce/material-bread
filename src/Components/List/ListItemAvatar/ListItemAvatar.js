import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Avatar from '../../Avatar/Avatar';

class ListItemAvatar extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    icon: PropTypes.string,
  };
  render() {
    const { style, icon } = this.props;
    return (
      <Avatar
        type="icon"
        icon={icon}
        size={24}
        iconColor={'white'}
        backgroundColor={'#42a5f5'}
        style={[{ marginRight: 16 }, style]}
      />
    );
  }
}

export default withTheme(ListItemAvatar);
