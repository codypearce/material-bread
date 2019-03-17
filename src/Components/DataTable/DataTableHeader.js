import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
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
  static defaultProps = {
    borderBottomColor: 'rgb(224, 224, 224)',
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
      <View
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataTableHeader: {
    height: 48,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default withTheme(DataTableHeader);
