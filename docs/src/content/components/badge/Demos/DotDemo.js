import React from 'react';
import { View, Image } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Badge, Icon, IconButton } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Badge size={7} >
        <Icon name="favorite" size={32} />
    </Badge>
    <Badge size={8} color={'red'}>
        <IconButton name="mail" size={24} />
    </Badge>
    <Badge size={9} color={'pink'} >
        <IconButton name="info" size={24} />
    </Badge>
    <Badge size={10} position={'left'}>
        <IconButton name="message" size={40} />
    </Badge>
</View>
`;

const DotDemo = pageHref => (
  <ComponentDemo
    sectionName={'Dot'}
    sectionHref={`${pageHref}#dot`}
    sectionId={'dot'}
    code={code}
    scope={{ View, Image, Badge, Icon, IconButton }}
    description={
      <div>
        Simply remove the <CodeInline code="content" type="prop" /> prop and
        reduce the <CodeInline code="size" type="prop" /> to something small
        like 7 and you will get a dot
      </div>
    }
  />
);
export default DotDemo;
