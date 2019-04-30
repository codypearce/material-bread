import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Divider } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View >    
        <Divider subheader={'Subheader'} />
        <Divider subheader={'Title'} inset={8} />
        <Divider subheader={'Section'} inset={16} marginVertical={24} />
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Subheader'}
    sectionHref={`${pageHref}#subheader`}
    sectionId={'subheader'}
    code={code}
    scope={{ View, Divider }}
  />
);
export default SubtitleDemo;
