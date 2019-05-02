import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Fab, Button } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    <Fab mini icon={'add'} />
    <Fab mini backgroundColor={'#E91E63'} icon={'archive'} />
    <Fab mini backgroundColor={'#F44336'} icon={'delete'} />
    <Fab mini backgroundColor={'#009688'} icon={'edit'} />
    <Fab mini backgroundColor={'black'} icon={'attach-money'} />
    <Fab mini disabled backgroundColor={'#009688'} icon={'delete'} />
</View>`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Mini'}
    sectionHref={`${pageHref}#mini`}
    sectionId={'mini'}
    code={code}
    scope={{ View, Fab, Button, Text }}
  />
);
export default SubtitleDemo;
