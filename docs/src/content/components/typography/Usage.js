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
        <Heading type={1}>h1</Heading>
        <Heading type={2}>h2</Heading>
        <Heading type={3}>h3</Heading>
        <Heading type={4}>h4</Heading>
        <Heading type={5}>h5</Heading>
        <Heading type={6}>h6</Heading>
        <Subtitle type={1}>Subtitle One</Subtitle>
        <Subtitle type={2}>Subtitle Two</Subtitle>
        <BodyText type={1}>Body 1</BodyText>
        <BodyText type={2}>Body 2</BodyText>
        <Caption>Caption</Caption>
        <Overline>Overline</Overline>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
