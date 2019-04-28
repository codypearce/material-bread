import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import { BodyText } from '../..';
import styles from './Divider.styles';

class Divider extends Component {
  static propTypes = {
    style: PropTypes.object,
    theme: PropTypes.object,
    marginVertical: PropTypes.number,
    subheader: PropTypes.string,
    inset: PropTypes.number,
  };

  _renderSubheader() {
    const { subheader, marginVertical, inset } = this.props;

    return (
      <View style={{ marginVertical: marginVertical ? marginVertical : 8 }}>
        {this._renderDivider()}
        <BodyText style={[styles.subheader, { marginLeft: inset }]}>
          {subheader}
        </BodyText>
      </View>
    );
  }

  _renderDivider() {
    const { style, theme, marginVertical, subheader, ...rest } = this.props;
    let marginVerticalImplemented = marginVertical ? marginVertical : 8;
    if (subheader) marginVerticalImplemented = 0;

    return (
      <View
        style={[
          theme.divider,
          {
            height: Platform.OS == 'web' ? 1 : StyleSheet.hairlineWidth,
            marginVertical: marginVerticalImplemented,
          },
          style,
        ]}
        {...rest}
      />
    );
  }
  render() {
    const { subheader } = this.props;

    return subheader ? this._renderSubheader() : this._renderDivider();
  }
}

export default withTheme(Divider);
