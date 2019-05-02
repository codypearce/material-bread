import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Fab } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <Fab />
  <Fab backgroundColor={'#E91E63'} icon={'archive'} />
  <Fab backgroundColor={'#F44336'} icon={'delete'} />
  <Fab backgroundColor={'#009688'} icon={'edit'} />
  <Fab backgroundColor={'black'} icon={'attach-money'} />
  <Fab disabled backgroundColor={'#009688'} icon={'delete'} />
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Fabs can have different icons, color, or inner content.`}
    code={code}
    scope={{ View, Fab }}
  />
);
export default MainDemo;
