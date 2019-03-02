import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../../Abstract/Ripple';

class DataTableHeaderItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    right: PropTypes.bool,
  };

  render() {
    const { children, onPress, right, style } = this.props;

    return (
      <Ripple
        disabled={!!onPress}
        onPress={onPress}
        style={[
          styles.item,
          { justifyContent: right ? 'flex-end' : 'flex-start' },
          style,
        ]}>
        <Text style={{ ...styles.text }} numberOfLines={1}>
          {children}
        </Text>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12,
  },

  text: {
    color: 'rgba(0,0,0,.6)',
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
  },
});

export default withTheme(DataTableHeaderItem);
