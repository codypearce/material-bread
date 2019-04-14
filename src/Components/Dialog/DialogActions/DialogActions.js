import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './DialogActions.styles';

class DialogActions extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

export default withTheme(DialogActions);
