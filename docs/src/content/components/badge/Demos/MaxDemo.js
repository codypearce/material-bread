import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Badge } from '../../../../../../src/index';

export const code = `
<View
    style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    }}
>
    <Badge size={36} content={'MB'} maxValue={99} />
    <Badge size={36} content={99} />
    <Badge size={36} content={100} maxValue={99} />
    <Badge size={36} content={1000} maxValue={999} />
</View>
`;

const MaxDemo = pageHref => (
  <ComponentDemo
    sectionName={'Max Value'}
    sectionHref={`${pageHref}#max`}
    sectionId={'max'}
    code={code}
    scope={{ View, Badge }}
    description={
      <div>
        Numerical Badges can have a <CodeInline code="maxvalue" type="prop" />.
        If <CodeInline code="content" type="prop" /> exceeds this value, a
        &quot;+&quot; will be added to the maximum.
      </div>
    }
  />
);
export default MaxDemo;
