import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import Checkbox from '../../Checkbox/Checkbox';
import styles from './DataTableRow.styles';

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

export default withTheme(DataTableRow);
