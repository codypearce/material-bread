import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../../Abstract/Ripple';

class DataTableHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    right: PropTypes.bool,
  };
  render() {
    const { children, style, onPress, right } = this.props;

    return (
      <Ripple
        style={[
          styles.dataTableItem,
          { justifyContent: right ? 'flex-end' : 'flex-start' },
          style,
        ]}
        disabled={!!onPress}
        onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  dataTableItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
  },
});

export default withTheme(DataTableHeader);
