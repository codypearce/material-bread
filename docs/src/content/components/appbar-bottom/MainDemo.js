import React from 'react';
import { ComponentMainDemo } from '@components';
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
        AppbarBottom is made up of three parts: left actions, fab, and right
        actions. Numerous combinations can be created with these components,
        however you can replace any part as needed. Below is a simple live
        example.
      </div>
    }
    code={code}
    scope={{ AppbarBottom, Fab }}
  />
);
export default MainDemo;
