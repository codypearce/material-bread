import React from 'react';
import { ComponentMainDemo, CodeInline } from '@components';
import { AppbarBottom, Fab } from '../../../../../src/index';

export const code = `<AppbarBottom 
    fab={<Fab backgroundColor={'black'} />}
    fabPosition={'center'} 
    fabCutout
    navigation={'menu'}
    actionItems={[
        {name: 'search', onPress: () => console.log('onSearch')},
        {name: 'more-vert'},
    ]}
    style={{marginTop: 16}}
/>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code={'AppbarBottom'} type={'element'} /> is made up of
        three separate parts: <CodeInline code={'navgiation'} type={'prop'} />,{' '}
        <CodeInline code={'prop'} type={'prop'} />, and{' '}
        <CodeInline code={'actionItems'} type={'prop'} />. Many combinations can
        be created with these props, however you can replace them with anything
        you want.
      </div>
    }
    code={code}
    scope={{ AppbarBottom, Fab }}
  />
);
export default MainDemo;
