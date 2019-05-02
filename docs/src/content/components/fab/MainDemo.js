import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Fab } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <Fab icon={'add'}/>
  <Fab backgroundColor={'#E91E63'} icon={'archive'} />
  <Fab backgroundColor={'#F44336'} icon={'delete'} />
  <Fab backgroundColor={'#009688'} icon={'edit'} />
  <Fab backgroundColor={'black'} icon={'attach-money'} />
  <Fab disabled backgroundColor={'#009688'} icon={'delete'} />
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Fab" type="element" />s usually display icons in the
        middle, you can pass a string for the name of the icon or pass an icon
        node to the <CodeInline code="icon" type="prop" /> prop. You can also
        replace it entirely with children.
      </div>
    }
    code={code}
    scope={{ View, Fab }}
  />
);
export default MainDemo;
