import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Utils/Shadow/shadow.js';

class DataTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    testID: PropTypes.string,
  };
  render() {
    const { children, style, testID } = this.props;

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
          ]}
          testID={testID}>
          {children}
        </View>
      </ScrollView>
    );
  }
}

export default withTheme(DataTable);
