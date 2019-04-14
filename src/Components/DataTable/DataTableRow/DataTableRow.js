import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Checkbox from '../../Checkbox/Checkbox';

class DataTableRow extends Component {
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
      <TouchableWithoutFeedback
        onPress={showcheckBox ? onPressCheckBox : onPress}
        disabled={!onPressCheckBox && !onPress}>
        <View style={[styles.container, { borderBottomColor }, style]}>
          {showcheckBox ? (
            <Checkbox
              checked={checked}
              onPress={onPressCheckBox}
              size={24}
              style={{ marginRight: 12 }}
            />
          ) : null}
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    height: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minWidth: 'auto',
  },
});

export default withTheme(DataTableRow);
