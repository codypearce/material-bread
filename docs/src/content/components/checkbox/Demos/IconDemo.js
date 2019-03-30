import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Avatar } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar
        type="icon"
        content="face"
        contentColor={'white'}
        size={64}
        color={'#42a5f5'}
    />
    <Avatar
        type="icon"
        content="alarm"
        size={48}
        color={'#c2185b'}
    />
    <Avatar
        type="icon"
        content="arrow-back"
        contentColor={'#c2185b'}
        color={'#f4511e'}
    />
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Avatar Icons'}
    sectionHref={`${pageHref}#icons`}
    sectionId={'icons'}
    code={code}
    scope={{ View, Avatar }}
  />
);
export default IconDemo;
