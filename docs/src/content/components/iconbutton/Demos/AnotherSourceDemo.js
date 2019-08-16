import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { IconButton } from '../../../../../../src/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <IconButton
          name="visual-studio-code"
          size={24}
          color={'#373177'}
          iconComponent={MaterialCommunityIcons}
        />
        <IconButton
          name="android-head"
          size={32}
          color={'#69B342'}
          iconComponent={MaterialCommunityIcons}
        />
        <IconButton
          name="apple-ios"
          size={48}
          color={'#000000'}
          iconComponent={MaterialCommunityIcons}
        />
        <IconButton
          name="react"
          size={64}
          color={'#5FDAFB'}
          iconComponent={MaterialCommunityIcons}
        />
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Source'}
    sectionHref={`${pageHref}#source`}
    sectionId={'source'}
    description={
      <div>
        You can use other icon packs from{' '}
        <CodeInline code="react-native-vector-icons" type="" /> by passing them
        into <CodeInline code="MaterialCommunityIcons" type="proop" /> and
        providing the icon name in the string.
      </div>
    }
    code={code}
    scope={{ View, IconButton, MaterialCommunityIcons }}
  />
);
export default SubtitleDemo;
