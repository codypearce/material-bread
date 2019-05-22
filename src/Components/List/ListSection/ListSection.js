import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform } from 'react-native';
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
    inset: PropTypes.bool,
    contentStyle: PropTypes.object,
  };

  render() {
    const {
      children,
      label,
      topDivider,
      bottomDivider,
      inset,
      style,
      contentStyle,
    } = this.props;

    return (
      <View style={([styles.container, { paddingTop: label ? 8 : 0 }], style)}>
        {topDivider ? <Divider /> : null}
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View style={[styles.content, contentStyle]}>{children}</View>
        {bottomDivider ? (
          <Divider
            style={{
              width:
                inset && Platform.OS == 'web' ? 'calc(100% - 72px)' : '100%',
              marginLeft: inset ? 72 : 0,
              marginTop: 0,
              marginBottom: 0,
            }}
          />
        ) : null}
      </View>
    );
  }
}

export default withTheme(ListSection);
