import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Divider from '../../Divider/Divider';
import styles from './DrawerSection.styles';

class DrawerSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    subheader: PropTypes.string,
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
  };

  render() {
    const { children, subheader, topDivider, bottomDivider } = this.props;

    return (
      <View style={styles.drawerSection}>
        {topDivider ? <Divider /> : null}
        {subheader ? <Text>{subheader}</Text> : null}
        <View style={styles.content}>{children}</View>
        {bottomDivider ? <Divider /> : null}
      </View>
    );
  }
}

export default withTheme(DrawerSection);
