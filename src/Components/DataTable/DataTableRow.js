import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../../Abstract/Ripple';
import Checkbox from '../Checkbox';

class DataTableRow extends Component {
  static defaultProps = {
    borderBottomColor: 'grey',
  };
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
        style={{ ...styles.container, borderBottomColor, ...style }}
        onPress={onPress}>
        {showcheckBox ? (
          <Checkbox
            checked={checked}
            onPress={onPressCheckBox}
            size={24}
            style={{ marginRight: 12 }}
          />
        ) : null}
        {children}
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default withTheme(DataTableRow);
