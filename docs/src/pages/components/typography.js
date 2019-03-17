import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Overline,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('align', 'Applies text-align to component', 'string', 'start'),
  createPropData('color', 'Text color', 'string', ''),
  createPropData(
    'gutterBottom',
    'Adds marginBottom 10 to create space',
    'bool',
    'false',
  ),

  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `
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

const usageCode = `import React, { Component } from 'react';
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

export default class TypographyPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'typography'}
          title={'Typography'}
          description={`Typography Components follow a design system to convey meaning.`}
          importCode={`import { Heading, Subtitle, BodyText, Caption, Overline} from 'material-bread';`}
          docsLink={
            'https://material.io/design/typography/the-type-system.html'
          }
          componentDescription={`Use each component to convey meaning to the page.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Heading,
            Subtitle,
            BodyText,
            Caption,
            Overline,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/typography#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
