import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../components/CodeInline';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'height',
    'Sets height of section and thus the image',
    'number',
    '194',
  ),
  createPropData(
    'image',
    'Displays image across the whole card media section',
    'node',
    '',
  ),
  createPropData('subtitle', 'Renders subtitle below the title', 'string', ''),
  createPropData('subtitleStyles', 'Styles for subtitle', 'object', ''),

  createPropData('title', 'Renders title', 'string', ''),
  createPropData('titleStyles', 'Styles for title', 'object', ''),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardMedia
        title={'Top ten books'}
        subtitle={'by Cody'}
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}  
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Books ranked with arbitrary bias, inconsistent logic, and strong opinions.
      </Text>
    </CardContent>
    <CardActions
      leftActionItems={[
        {name: 'Read',},
      ]}
      rightActionItems={[
        {name: 'favorite',},
        {name: 'share'} 
      ]}
    />
  </Card>
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Card, CardContent, CardMedia } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
            title={'Top ten books'}
            subtitle={'by Cody'}
            image={
                <Image
                    style={{ flex: 1, width: '100%' }}
                    source={{uri: 'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}  
                    resizeMode="cover"
                />
            }
        />
        <CardContent >
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
      </Card>
    );
  }
}`;

export default class CardMediaPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-media'}
          title={'Card Media'}
          description={'CardMedia displays an image on a card.'}
          importCode={`import { CardMedia } from 'material-bread';`}
          componentDescription={
            <div>
              CardMedia takes an <CodeInline code="image" type="prop" /> prop
              and fits it into a <CodeInline code="Card" type="element" />.
              Optional <CodeInline code="title" type="prop" /> and{' '}
              <CodeInline code="subtitle" type="prop" /> are shown in the bottom
              left corner of the <CodeInline code="image" type="prop" />.
            </div>
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            IconButton,
            View,
            Card,
            CardContent,
            CardActions,
            Text,
            CardMedia,
            Image,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/card-media#demos" id="demos">
            <ComponentDescription text="You can see more demos on the other component pages and storybook." />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
