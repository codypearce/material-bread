import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Badge, IconButton, Icon } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Badge size={14} content={4}>
      <Icon name="favorite" size={32} />
  </Badge>
  <Badge size={14} content={77} color={'red'}>
      <IconButton name="mail" size={24} />
  </Badge>
  <Badge size={14} content={7} position={'left'} textColor={'pink'} >
      <IconButton name="info" size={24} />
  </Badge>
  <Badge size={24} content={1023} position={'left'}>
      <IconButton name="message" size={40} />
  </Badge>
  <Badge size={24} content={24} />
  <Badge size={16} content={99} />
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Badge" type="element" />s can be used in two ways:
        standalone or wrapping a component.
      </div>
    }
    code={code}
    scope={{ IconButton, View, Image, Badge, Icon }}
  />
);
export default MainDemo;
