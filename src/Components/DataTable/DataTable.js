import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Utils/Shadow/shadow';

class DataTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };
  render() {
    const { children, style } = this.props;

    return (
      <ScrollView
        scrollEnabled={true}
        horizontal={true}
        contentContainerStyle={{ minWidth: '100%' }}>
        <View
          style={[
            {
              flex: 1,
              borderRadius: 4,
              ...shadow(4),
            },
            style,
          ]}>
          {children}
        </View>
      </ScrollView>
    );
  }
}

export default withTheme(DataTable);
