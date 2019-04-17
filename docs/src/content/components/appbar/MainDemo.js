import React from 'react';
import { Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Appbar, IconButton, Badge } from '../../../../../src/index';

export const code = ` <Appbar
    barType={"normal"}
    title={'Page Title'} 
    navigation={'menu'}
    onNavigation={() => console.log('onNavigation!')}
    actionItems={[
    <Badge
        containerStyle={{marginRight: 16, flex: 1}}
        color={'#e10050'}
        textColor={'white'}
        size={14}
        content={77}>
        <IconButton name="favorite" size={24} color={'white'} />
    </Badge>,
    {name: 'search', onPress: () => console.log('onSearch')},
    {name: 'more-vert'},
    ]}
/>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Appbar" type={'element'} />s are essentially broken
        into three parts: <CodeInline code="navigation" type={'prop'} />,{' '}
        <CodeInline code="title" type={'prop'} />, and
        <CodeInline code="actionItems" type={'prop'} />. Many combinations are
        possible using these sections, but if you need more customization you
        can replace all of them by passing{' '}
        <CodeInline code="children" type={'prop'} />.
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton, Image, Badge }}
  />
);
export default MainDemo;
