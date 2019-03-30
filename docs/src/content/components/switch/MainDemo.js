import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Avatar } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
        size={64} 
    />
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
        size={48} 
        onPress={() => console.log('avatar')}
        ripple
    />
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
    /> 
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        Avatars can be images, letters, or icons. First provide the{' '}
        <CodeInline code="type" type="prop" />
        of avatar, then either provide the{' '}
        <CodeInline code="content" type="prop" /> prop for icons and letters or{' '}
        <CodeInline code="image" type="prop" /> prop for images. A simple image
        example is shown below.
      </div>
    }
    code={code}
    scope={{ View, Avatar, Image }}
  />
);
export default MainDemo;
