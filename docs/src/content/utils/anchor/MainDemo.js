import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Anchor, Heading, Button } from '../../../../../src/index';

export const code = `<View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
  <Anchor url={'http://material-bread.org/'} target={'_parent'}>
    <Button
      text={'Documentation'}
      type={'outlined'}
      textColor={'rgb(233, 30, 99)'}
    />
  </Anchor>

  <Anchor
    url={'https://github.com/codypearce/material-bread'}
    target={'_parent'}>
    <Button
      text={'Github'}
      type={'outlined'}
      textColor={'#666'}
      style={{ marginLeft: 10 }}
    />
  </Anchor>
  <Anchor url={'https://www.pbs.org/'} target={'_blank'}>
    <Heading style={{ color: 'blue',  marginLeft: 10  }}>PBS</Heading>
  </Anchor>
  <Anchor url={'https://www.bbc.com/'} target={'_blank'}>
    <Heading style={{ color: 'blue', marginLeft: 10 }}>BBC</Heading>
  </Anchor>
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Links are defined differently in react-native and the web. This component combines those two approaches so you can use one component across all platforms.'
    }
    code={code}
    scope={{ View, Anchor, Heading, Button }}
  />
);
export default MainDemo;
