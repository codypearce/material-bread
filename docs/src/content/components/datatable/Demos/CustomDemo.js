import React from 'react';
import { View } from 'react-native';
import { CodeInline, ComponentDemo } from '@components';
import { Avatar } from '../../../../../../src/index';

export const code = `<Avatar 
    style={{borderRadius: 10}}
    size={40}
    type={'icon'}
    content={'face'}
/>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      <div>
        You can style any part or add{' '}
        <CodeInline code="children" type={'prop'} /> to replace all the inner
        content to create something more custom.
      </div>
    }
    code={code}
    scope={{ View, Avatar }}
  />
);
export default SubtitleDemo;
