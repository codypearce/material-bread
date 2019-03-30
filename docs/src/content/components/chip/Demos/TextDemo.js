import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Avatar } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar
        type="text"
        content="CP"
        contentColor={'white'}
        size={64}
        color={'#42a5f5'}
    />
    <Avatar
        type="text"
        content="MB"
        size={48}
        color={'#c2185b'}
    />
    <Avatar
        type="text"
        content="NP"
        contentColor={'#c2185b'}
        color={'#f4511e'}
    />
</View>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Avatar Text'}
    sectionHref={`${pageHref}#text`}
    sectionId={'text'}
    description={
      "Text is usually two letters for a person's initial, but it can be anything you want."
    }
    code={code}
    scope={{ View, Avatar }}
  />
);
export default SubtitleDemo;
