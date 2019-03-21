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
  CardHeader,
  Avatar,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../components/CodeInline';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'action',
    'Displays action at the top right of the section',
    'node',
    '',
  ),
  createPropData('subtitle', 'Renders subtitle below the title', 'string', ''),
  createPropData('subtitleStyles', 'Styles for subtitle', 'object', ''),

  createPropData(
    'thumbnail',
    'Renders arbitrary thumbnail on left of text',
    'node',
    '',
  ),
  createPropData('title', 'Renders title', 'string', ''),
  createPropData('titleStyles', 'Styles for title', 'object', ''),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardHeader
        thumbnail={
            <Avatar 
                type="image" 
                image={<Image source={{uri: 'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png'}} /> } 
                size={40}
            />
        }
        title={'Mario'}
        subtitle={'Hero. Plumber. Brother.'}
        action={<IconButton name="more-vert" size={24} />}
    />
    <CardMedia
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://i.redd.it/tr8wgp1ysulz.png'}}
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Movember is over. 
      </Text>
    </CardContent>
    <CardActions
      rightActionItems={[
        {name: 'reply',},
        {name: 'thumb-up',},
        {name: 'share'} 
      ]}
    />
  </Card>
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Card, CardContent, CardHeader, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
            thumbnail={
                <Avatar 
                    type="icon" 
                    content="person"
                    color={'white'}
                    size={40}
                />
            }
            title={'Title'}
            subtitle={'Subtitle'}
            action={<IconButton name="more-vert" size={24} />}
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

export default class CardHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-header'}
          title={'Card Header'}
          description={
            'CardHeader displays information and actions about the card.'
          }
          importCode={`import { CardHeader } from 'material-bread';`}
          componentDescription={
            <div>
              The CardHeader component is built of{' '}
              <CodeInline code="title" type="prop" />,{' '}
              <CodeInline code="subheader" type="prop" />,{' '}
              <CodeInline code="thumbnail" type="prop" />, and
              <CodeInline code="action" type="prop" />. Any can be added or
              omitted. <CodeInline code="children" type="prop" /> will replace
              both <CodeInline code="title" type="prop" /> and{' '}
              <CodeInline code="subheader" type="prop" /> and will show between{' '}
              <CodeInline code="thumbnail" type="prop" /> and
              <CodeInline code="action" type="prop" /> if provided.
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
            CardMedia,
            CardHeader,
            Text,
            Image,
            Avatar,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/card-actions#demos"
            id="demos">
            <ComponentDescription text="You can see more demos on the other component pages and storybook." />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
