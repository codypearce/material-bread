import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Heading, Subtitle, BodyText, Caption, Overline, } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Heading type={1} text="h1" />
        <Heading type={2} text="h2" />
        <Heading type={3} text="h3" />
        <Heading type={4} text="h4" />
        <Heading type={5} text="h5" />
        <Heading type={6} text="h6" />
        <Subtitle type={1} text="Subtitle 1" />
        <Subtitle type={2} text="Subtitle 2" />
        <BodyText type={1} text="Body 2" />
        <BodyText type={2} text="Body 2" />
        <Caption text="Caption" />
        <Overline text="Overline" />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
