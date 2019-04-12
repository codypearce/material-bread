import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { Text, View, Image } from 'react-native';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Ripple,
  Badge,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Card', module)
  .addParameters({ jest: ['Card'] })
  .add('Card', () => (
    <Container scroll>
      <Header title={'Card'} />

      <Card style={{ flex: 1, marginBottom: 20, padding: 16 }}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          Just some text
        </Text>
        <Button type={'flat'} text="Card button" />
      </Card>
      <Card style={{ maxWidth: 400, width: '100%', marginBottom: 50 }}>
        <CardHeader
          thumbnail={
            <Avatar
              type="image"
              image={
                <Image
                  source={{
                    uri:
                      'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
                  }}
                />
              }
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
              source={{ uri: 'https://i.redd.it/zj9vfr7uuljz.png' }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            Ran out of bleach for beard, but Daenerys says it looks cool.
          </Text>
        </CardContent>
        <CardActions
          rightActionItems={[{ name: 'thumb-up' }, { name: 'share' }]}
        />
      </Card>

      <Card style={{ maxWidth: 400, width: '100%', marginBottom: 50 }}>
        <Ripple onPress={() => console.log('pressed action')}>
          <CardMedia
            image={
              <Image
                style={{ flex: 1, width: '100%' }}
                source={{
                  uri:
                    'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
                resizeMode="cover"
              />
            }
          />
          <CardContent>
            <Text
              style={{
                color: 'rgba(0,0,0,.6)',
                fontSize: 16,
                fontWeight: '600',
                marginBottom: 6,
              }}>
              Gorilla
            </Text>
            <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
              Gorillas are ground-dwelling, predominantly herbivorous apes that
              inhabit the forests of central Sub-Saharan Africa.
            </Text>
          </CardContent>
        </Ripple>
        <CardActions
          leftActionItems={[{ name: 'share' }, { name: 'learn more' }]}
        />
      </Card>
      <Card
        style={{ maxWidth: 300, width: '100%', marginBottom: 50 }}
        onPress={() => console.log('clicked dog')}>
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800',
              }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text
            style={{
              color: 'rgba(0,0,0,.6)',
              fontSize: 16,
              fontWeight: '600',
              marginBottom: 6,
            }}>
            Dog
          </Text>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            The domestic dog is a member of the genus Canis (canines), which
            forms part of the wolf-like canids, and is the most widely abundant
            terrestrial carnivore.
          </Text>
        </CardContent>
      </Card>
    </Container>
  ))
  .add('CardActions', () => (
    <Container scroll>
      <Header title={'Card Actions'} />

      <Card style={{ maxWidth: 400, width: '100%' }}>
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            Fact: dogs make everything better
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[{ name: 'share' }, { name: 'learn more' }]}
          rightActionItems={[{ name: 'favorite' }, { name: 'share' }]}
        />
      </Card>
    </Container>
  ))
  .add('CardContent', () => (
    <Container scroll>
      <Header title={'Card Content'} />
      <Card style={{ maxWidth: 400, width: '100%' }}>
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text
            style={{
              color: 'rgba(0,0,0,.6)',
              fontSize: 16,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            Reasons dogs are the best:
          </Text>
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
              - Man's best friend
            </Text>
            <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
              - Some have jobs
            </Text>
            <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
              - See image
            </Text>
          </View>
        </CardContent>
        <CardActions
          rightActionItems={[
            <Badge content={99}>
              <IconButton name="favorite" color={'#F44336'} size={24} />
            </Badge>,
            { name: 'share' },
          ]}
        />
      </Card>
    </Container>
  ))

  .add('CardHeader', () => (
    <Container scroll>
      <Header title={'Card Media'} />
      <Card style={{ maxWidth: 400, width: '100%' }}>
        <CardHeader
          thumbnail={
            <Avatar
              type="image"
              image={
                <Image
                  source={{
                    uri:
                      'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png',
                  }}
                />
              }
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
              source={{ uri: 'https://i.redd.it/tr8wgp1ysulz.png' }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            Movember is over.
          </Text>
        </CardContent>
        <CardActions
          rightActionItems={[
            { name: 'reply' },
            { name: 'thumb-up' },
            { name: 'share' },
          ]}
        />
      </Card>
    </Container>
  ))
  .add('CardMedia', () => (
    <Container scroll>
      <Header title={'Card Media'} />

      <Card style={{ maxWidth: 400, width: '100%' }}>
        <CardMedia
          title={'Top ten books'}
          subtitle={'by Cody'}
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            Books ranked with arbitrary bias, inconsistent logic, and strong
            opinions.
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[{ name: 'Read' }]}
          rightActionItems={[{ name: 'favorite' }, { name: 'share' }]}
        />
      </Card>
    </Container>
  ));
