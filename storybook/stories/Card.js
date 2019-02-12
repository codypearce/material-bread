import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Image } from 'react-native';

import {
  BreadProvider,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Icon,
} from '../../src/index';

storiesOf('Card', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Card', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Card</Text>
      </View>
      <Card>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          Just some text
        </Text>
      </Card>
    </BreadProvider>
  ))
  .add('CardActions', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Card Actions</Text>
      </View>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              type="icon"
              icon="face"
              size={40}
              iconColor={'white'}
              backgroundColor={'#42a5f5'}
            />
          }
          title={'Title Goes Here'}
          subheader={'Secondary Text'}
          action={<Icon name="more-vert" size={24} />}
        />
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={require('../assets/eagle3.jpeg')}
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
          leftButtonLabel={'Share'}
          rightButtonLabel={'Learn More'}
        />
      </Card>
    </BreadProvider>
  ))
  .add('CardHeader', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Card Header</Text>
      </View>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              type="icon"
              icon="face"
              size={40}
              iconColor={'white'}
              backgroundColor={'#42a5f5'}
            />
          }
          title={'Title Goes Here'}
          subheader={'Secondary Text'}
        />
      </Card>
      <Card style={{ marginTop: 32 }}>
        <CardHeader
          avatar={
            <Avatar
              type="icon"
              icon="face"
              size={40}
              iconColor={'white'}
              backgroundColor={'#42a5f5'}
            />
          }
          title={'Title Goes Here'}
          subheader={'Secondary Text'}
          action={<Icon name="more-vert" size={24} />}
        />
      </Card>
    </BreadProvider>
  ))

  .add('CardMedia', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Card Media</Text>
      </View>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              type="icon"
              icon="face"
              size={40}
              iconColor={'white'}
              backgroundColor={'#42a5f5'}
            />
          }
          title={'Title Goes Here'}
          subheader={'Secondary Text'}
          action={<Icon name="more-vert" size={24} />}
        />
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={require('../assets/eagle3.jpeg')}
              resizeMode="cover"
            />
          }
        />
      </Card>
    </BreadProvider>
  ))
  .add('CardContent', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Card Content</Text>
      </View>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              type="icon"
              icon="face"
              size={40}
              iconColor={'white'}
              backgroundColor={'#42a5f5'}
            />
          }
          title={'Title Goes Here'}
          subheader={'Secondary Text'}
          action={<Icon name="more-vert" size={24} />}
        />
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={require('../assets/eagle3.jpeg')}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
      </Card>
    </BreadProvider>
  ));
