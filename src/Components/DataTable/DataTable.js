import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';

class DataTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };
  render() {
    const { children, style } = this.props;

    return <View style={{ width: '100%', ...style }}>{children}</View>;
  }
}

export default withTheme(DataTable);
