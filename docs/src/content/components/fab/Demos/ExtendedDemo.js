import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Fab, Button } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    <Fab icon={'add'} label={'Add'} />
    <Fab backgroundColor={'#E91E63'} icon={'archive'} label={'Archive'} />
    <Fab backgroundColor={'#F44336'} icon={'delete'} label={'Delete'} />
    <Fab backgroundColor={'#009688'} icon={'edit'} label={'Edit'} />
    <Fab backgroundColor={'black'} icon={'attach-money'} label={'Buy'} />
    <Fab disabled icon={'delete'} label={'Disabled'} />
</View>`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Extended'}
    sectionHref={`${pageHref}#extended`}
    sectionId={'extended'}
    code={code}
    scope={{ View, Fab, Button, Text }}
  />
);
export default SubtitleDemo;
