import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';

import { Divider } from '../../..';
import styles from './ListSection.styles';

class ListSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    label: PropTypes.string,
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
  };

  render() {
    const { children, label, topDivider, bottomDivider } = this.props;

    return (
      <View style={[styles.drawerSection, { paddingTop: label ? 8 : 0 }]}>
        {topDivider ? <Divider /> : null}
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View style={styles.content}>{children}</View>
        {bottomDivider ? <Divider /> : null}
      </View>
    );
  }
}

export default withTheme(ListSection);
