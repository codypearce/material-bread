import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Colors } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    <View style={{width: 100, height: 100, backgroundColor: Colors.blue[700]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.red[300]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.teal[500]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.cyan['A100']}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.pink['600']}} />
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={'Colors can be accessed as shown below'}
    code={code}
    scope={{ View, Colors }}
  />
);
export default MainDemo;
