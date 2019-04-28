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
    label: PropTypes.string,
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
    fullWidth: PropTypes.bool,
  };

  render() {
    const {
      children,
      label,
      topDivider,
      bottomDivider,
      fullWidth,
    } = this.props;

    return (
      <View
        style={[
          styles.drawerSection,
          { paddingHorizontal: fullWidth ? 0 : 8, paddingTop: label ? 8 : 0 },
        ]}>
        {topDivider ? <Divider /> : null}
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View style={styles.content}>{children}</View>
        {bottomDivider ? <Divider /> : null}
      </View>
    );
  }
}

export default withTheme(DrawerSection);
