import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Banner } from '../../../../../../src/index';

export const code = `<Banner
  actionItems={[
    {name: 'Sign in', onPress: () => console.log('sign in')}
  ]}
  singleLine
  message={
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
  visible
/>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Single Line'}
    sectionHref={`${pageHref}#singeline`}
    sectionId={'singeline'}
    description={
      <div>
        The <CodeInline code="singleLine" type="prop" /> prop forces the banner
        content to show in a row and aligned to the center.{' '}
        {`But it
      doesn't force the text content onto one line.`}{' '}
        This is so smaller screens will handle the text more gracefully.
      </div>
    }
    code={code}
    scope={{ View, Banner }}
  />
);
export default IconDemo;
