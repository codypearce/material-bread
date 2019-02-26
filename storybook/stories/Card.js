import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { Text, Image } from 'react-native';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Icon,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Card', module)
  .add('Card', () => (
    <Container>
      <Header title={'Card'} />

      <Card>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          Just some text
        </Text>
      </Card>
    </Container>
  ))
  .add('CardActions', () => (
    <Container>
      <Header title={'Card Actions'} />

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
    </Container>
  ))
  .add('CardHeader', () => (
    <Container>
      <Header title={'Card header'} />

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
    </Container>
  ))

  .add('CardMedia', () => (
    <Container>
      <Header title={'Card Media'} />

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
    </Container>
  ))
  .add('CardContent', () => (
    <Container>
      <Header title={'Card Content'} />

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
    </Container>
  ));
