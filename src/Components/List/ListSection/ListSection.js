import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';

import Divider from '../../Divider/Divider.js';
import styles from './ListSection.styles';

class ListSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
    inset: PropTypes.bool,
    contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
  };

  render() {
    const {
      children,
      label,
      labelStyle,
      topDivider,
      bottomDivider,
      inset,
      style,
      contentStyle,
      theme,
    } = this.props;

    return (
      <View style={([styles.container, { paddingTop: label ? 8 : 0 }], style)}>
        {topDivider ? <Divider /> : null}
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
        <View style={[theme.text, styles.content, contentStyle]}>
          {children}
        </View>
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
