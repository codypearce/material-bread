import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { Appbar, IconButton } from '../../../../../../src/index';

export const code = `<Appbar
  barType={'prominent'}
  title={'Page Title'} 
  subtitle={'Subtitle'}
  navigation={'menu'}
  actionItems={[
    {name: 'favorite'},
    {name: 'search', onPress: () => console.log('onSearch')},
    <IconButton name="more-vert" size={24} color={'white'} />, 
  ]}
/>`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Subtitle'}
    sectionHref={`${pageHref}#subtitle`}
    sectionId={'subtitle'}
    description={
      <div>
        Subtitles can be used on <CodeInline code="normal" type={'value'} /> or{' '}
        <CodeInline code="prominent" type={'value'} />{' '}
        <CodeInline code="barType" type={'prop'} />
        s, but not <CodeInline code="dense" type={'value'} />. Try changing
        <CodeInline code="barType" type={'prop'} /> to{' '}
        <CodeInline code="normal" type={'value'} /> to see how it will display
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton }}
  />
);
export default SubtitleDemo;
