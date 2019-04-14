import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './DialogContentText.styles';

class DialogContentText extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <Text style={styles.title}>{children}</Text>;
  }
}

export default withTheme(DialogContentText);
