import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { AppbarBottom, Fab } from '../../../../../../src/index';

export const code = `<AppbarBottom 
    fab={<Fab backgroundColor={'black'} />}
    fabPosition={'end'} 
    fabIcon={'reply'}
    actionItems={[
        {name: 'archive', onPress: () => console.log('onArchive')},
        {name: 'mail'},
        {name: 'label'},
        {name: 'delete'},
    ]}
/>`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'End Fab'}
    sectionHref={`${pageHref}#end-fab`}
    sectionId={'end-fab'}
    description={
      <div>
        Changing <CodeInline code="fabPosition" type={'prop'} /> to{' '}
        <CodeInline code="end" type={'value'} /> will move{' '}
        <CodeInline code="actionItems" type={'prop'} />
        to the left after the <CodeInline code="navigation" type={'prop'} />
        . Add the
        <CodeInline code="fabCutout" type={'prop'} /> prop to see how spacing is
        effected.
      </div>
    }
    code={code}
    scope={{ AppbarBottom, Fab }}
  />
);
export default SubtitleDemo;
