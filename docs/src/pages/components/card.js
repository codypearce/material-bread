import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Ripple,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'Action Media', sub: true },
  { name: 'Clickable', sub: true },
];

const propData = [
  createPropData(
    'onPress',
    'Call back when card is pressed, adds ripple to whole component',
    'func',
    '',
  ),
  createPropData(
    'outlined',
    'Adds a hairlineWidth border around card',
    'bool',
    '',
  ),
  createPropData('radius', 'Border radius of card', 'number', '4'),
  createPropData(
    'rippleProps',
    'Object is spread to Ripple Component',
    'object',
    '',
  ),
  createPropData('shadow', 'Adds shadow for all platforms', 'number', '1'),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardHeader
        thumbnail={
            <Avatar 
                type="image" 
                image={<Image source={{uri: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg'}} /> } 
                size={40}
            />
        }
        title={'Jon Snow'}
        subtitle={'Knows Nothing, KingofDaNorth'}
        action={<IconButton name="more-vert" size={24} />}
    />
    <CardMedia
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://i.redd.it/zj9vfr7uuljz.png'}}
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Ran out of bleach for beard, but Daenerys says it looks cool.
      </Text>
    </CardContent>
    <CardActions
      rightActionItems={[
        {name: 'thumb-up',},
        {name: 'share'} 
      ]}
    />
  </Card>
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Card, CardMedia, CardContent, CardActions, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{uri: 'https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800'}}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[
            {name: 'share',},
            {name: 'learn more'}
          ]}
        />
    </Card>
    );
  }
}`;

const actionMedia = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <Ripple onPress={() => console.log('pressed action')}>
      <CardMedia
        image={
          <Image
            style={{ flex: 1, width: '100%' }}
            source={{uri: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
            resizeMode="cover"
          />
        }
      />
      <CardContent >
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
          Gorilla
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
          Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.
        </Text>
      </CardContent>
    </Ripple>
    <CardActions
      leftActionItems={[
        {name: 'share',},
        {name: 'learn more'}
      ]}
    />
  </Card>
</View>`;

const clickable = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 300, marginRight: 24}} onPress={() => console.log('clicked gorilla')}>
    <CardMedia
      image={
        <Image
          style={{ flex: 1, width: '100%' }}
          source={{uri: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
          resizeMode="cover"
        />
      }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
        Gorilla
      </Text>
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.
      </Text>
    </CardContent>
  </Card>

  <Card style={{width: 300}} onPress={() => console.log('clicked dog')}>
    <CardMedia
      image={
        <Image
          style={{ flex: 1, width: '100%' }}
          source={{uri: 'https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800'}}
          resizeMode="cover"
        />
      }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
        Dog
      </Text>
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.
      </Text>
    </CardContent>
  </Card>
</View>`;

export default class CardPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card'}
          title={'Card'}
          description={
            'Cards contain content and actions about a single subject.'
          }
          importCode={`import { Card } from 'material-bread';`}
          docsLink={'https://material.io/design/components/cards.html'}
          componentDescription={
            'Cards can be built using CardHeader, CardMedia, CardContent, CardActions, or custom components. Please see each Card Component page to learn how to use them.'
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            IconButton,
            View,
            Card,
            CardHeader,
            CardMedia,
            CardContent,
            CardActions,
            Avatar,
            Image,
            Text,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/card#demos" id="demos">
            <ComponentDescription text="" />
          </Section>
          <Section
            name="Action Media"
            href="/components/card#action-media"
            id="action-media">
            <ComponentDescription text="You can wrap any component with a ripple to make it clickable." />
            <LiveEdit
              code={actionMedia}
              scope={{
                IconButton,
                View,
                Card,
                CardHeader,
                CardMedia,
                CardContent,
                CardActions,
                Avatar,
                Image,
                Text,
                Ripple,
              }}
            />
          </Section>
          <Section
            name="Clickable"
            href="/components/card#clickable"
            id="clickable">
            <ComponentDescription text="Adding onPress will make the entire card clickable, useful when cards act as links or actions." />
            <LiveEdit
              code={clickable}
              scope={{
                IconButton,
                View,
                Card,
                CardHeader,
                CardMedia,
                CardContent,
                CardActions,
                Avatar,
                Image,
                Text,
                Ripple,
              }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
