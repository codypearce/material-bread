import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    right: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    flex: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func,
    type: PropTypes.string,
  };

  _renderText() {
    const { text, type } = this.props;
    const style = type == 'header' ? styles.textHeader : styles.text;

    return <Text style={style}>{text}</Text>;
  }
  render() {
    const {
      children,
      style,
      right,
      borderRight,
      borderLeft,
      flex,
      onPress,
    } = this.props;

    return (
      <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
        <View
          style={[
            styles.dataTableItem,
            {
              flex: flex ? flex : 1,
              justifyContent: right ? 'flex-end' : 'flex-start',
              borderRightWidth: borderRight ? 1 : 0,
              borderLeftWidth: borderLeft ? 1 : 0,
            },
            style,
          ]}>
          {children ? children : this._renderText()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  dataTableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgb(224, 224, 224)',
    paddingHorizontal: 16,
    height: '100%',
  },
  text: {
    fontSize: 13,
    color: 'rgba(0,0,0,.87)',
  },
  textHeader: {
    color: 'rgba(0,0,0,.54)',
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
  },
});

export default withTheme(TableCell);
