import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { AppbarBottom } from '../../../../../../src/index';

export const code = `<AppbarBottom
    navigation={'menu'} 
    actionItems={[
        {name: 'archive', onPress: () => console.log('onArchive')},
        {name: 'mail'},
        {name: 'label'},
        {name: 'delete'},
    ]}
/>`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'No Fab'}
    sectionHref={`${pageHref}#no-fab`}
    sectionId={'no-fab'}
    description={
      <div>
        If you do not provide the <CodeInline code="fab" type={'prop'} /> prop
        then the component will function like a normal appbar with{' '}
        <CodeInline code="actionItems" type={'prop'} />.
      </div>
    }
    code={code}
    scope={{ AppbarBottom }}
  />
);
export default SubtitleDemo;
