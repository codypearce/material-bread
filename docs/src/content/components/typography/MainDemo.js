import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Overline,
} from '../../../../../src/index';

export const code = `class Demo extends React.Component {

  render() {
    return (
      <View>  
        <Heading type={1} text="H1" />
        <Heading type={2} text="H2" />
        <Heading type={3} text="H3" />
        <Heading type={4} text="H4" />
        <Heading type={5} text="H5" />
        <Heading type={6} text="H6" />
        <Subtitle type={1} text="Subtitle 1" />
        <Subtitle type={2} text="Subtitle 2" />
        <BodyText type={1} text="Body 1" />
        <BodyText type={2} text="Body 2" />
        <Caption text="Caption" />
        <Overline text="Overline" />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        You can either pass text with the <CodeInline code="text" type="prop" />{' '}
        prop or pass as children{' '}
      </div>
    }
    code={code}
    scope={{ View, Heading, Subtitle, BodyText, Caption, Overline, Image }}
  />
);
export default MainDemo;
