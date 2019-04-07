import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
  <Button
    style={{height: 100, width: 100, flexDirection: "column", marginRight: 24}}
    type={'outlined'}
    borderSize={4}
    radius={10}
  >
    <Icon name="cloud-upload" size={34} />
    <Text style={{fontWeight: '600', textAlign: 'center'}}>Upload files</Text>
  </Button>
</View>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      <div>
        Adding children will replace the text node, but not icon or loader. This
        allows for a more customization.
      </div>
    }
    code={code}
    scope={{ View, Button, Text, Icon }}
  />
);
export default SubtitleDemo;
