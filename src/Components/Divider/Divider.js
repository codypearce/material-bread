import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import BodyText from '../Typography/BodyText/BodyText.js';
import styles from './Divider.styles';

class Divider extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    marginVertical: PropTypes.number,
    subheader: PropTypes.string,
    insetHeader: PropTypes.number,
    insetLeft: PropTypes.number,
    testID: PropTypes.string,
  };

  _renderSubheader() {
    const { subheader, marginVertical, insetHeader, testID } = this.props;

    return (
      <View
        style={{ marginVertical: marginVertical ? marginVertical : 8 }}
        testID={testID}>
        {this._renderDivider()}
        <BodyText style={[styles.subheader, { marginLeft: insetHeader }]}>
          {subheader}
        </BodyText>
      </View>
    );
  }

  _renderDivider() {
    const {
      style,
      theme,
      marginVertical,
      subheader,
      testID,
      insetLeft,
      ...rest
    } = this.props;
    let marginVerticalImplemented = marginVertical ? marginVertical : 8;
    if (subheader) marginVerticalImplemented = 0;
    let width = insetLeft > 0 ? `calc(100% - ${insetLeft}px)` : '100%';
    let marginLeft = insetLeft > 0 ? insetLeft : 0;

    return (
      <View
        style={[
          theme.divider,
          {
            height: Platform.OS == 'web' ? 1 : StyleSheet.hairlineWidth,
            marginVertical: marginVerticalImplemented,
            width,
            marginLeft,
          },
          style,
        ]}
        testID={testID}
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
