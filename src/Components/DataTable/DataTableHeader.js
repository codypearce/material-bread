import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../../Abstract/Ripple';
import Checkbox from '../Checkbox';

class DataTableHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    borderBottomColor: PropTypes.string,
    checked: PropTypes.bool,
    onPressCheckBox: PropTypes.func,
    showcheckBox: PropTypes.bool,
    onPress: PropTypes.func,
  };
  render() {
    const {
      children,
      style,
      borderBottomColor,
      onPress,
      checked,
      onPressCheckBox,
      showcheckBox,
    } = this.props;

    return (
      <Ripple
        style={[styles.dataTableHeader, { borderBottomColor }, style]}
        onPress={onPress}>
        {showcheckBox ? (
          <Checkbox
            checked={checked}
            onPress={onPressCheckBox}
            style={{ marginRight: 12 }}
          />
        ) : null}
        {children}
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  dataTableHeader: {
    height: 48,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default withTheme(DataTableHeader);
