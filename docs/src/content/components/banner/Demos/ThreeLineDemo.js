import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Banner } from '../../../../../../src/index';

export const code = `<Banner
  actionItems={[
    {name: 'Continue'},
    {name: 'Sign in', onPress: () => console.log('sign in')}
  ]}
  message={
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  }
  visible
/>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Three Line'}
    sectionHref={`${pageHref}#threeline`}
    sectionId={'threeline'}
    code={code}
    scope={{ View, Banner }}
  />
);
export default SubtitleDemo;
