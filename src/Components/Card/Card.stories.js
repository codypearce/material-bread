import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { Text, View, Image, ScrollView } from 'react-native';

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
} from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

/*  eslint-disable no-console */
export default storiesOf('Components|Card', module)
  .addParameters({ jest: ['Card'] })
  .add('simple', () => (
    <Container scroll>
      <Header title={'Card'} />

      <Card style={{ flex: 1, marginBottom: 20, padding: 16, maxWidth: 400 }}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This is a simple card with a button
        </Text>
        <Button type={'flat'} text="Card button" />
      </Card>

      <Card
        style={{ flex: 1, marginBottom: 20, padding: 16, maxWidth: 400 }}
        shadow={5}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This one has more shadow
        </Text>
        <Button type={'flat'} text="Card button" style={{ marginBottom: 20 }} />
        <Button type={'flat'} color={'#E91E63'} text="Card button" />
      </Card>

      <Card
        style={{ flex: 1, marginBottom: 20, padding: 16, maxWidth: 400 }}
        shadow={8}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This one has more shadow
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Button type={'flat'} text="Card button" />
          <Button type={'flat'} color={'#E91E63'} text="Card button" />
        </View>
      </Card>
      <Card
        style={{ flex: 1, marginBottom: 20, padding: 16, maxWidth: 400 }}
        radius={20}
        shadow={5}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This one has more radius
        </Text>
        <Button type={'flat'} text="Card button" />
      </Card>
      <Card
        style={{
          flex: 1,
          marginBottom: 20,
          padding: 16,
          maxWidth: 400,
          maxHeight: 400,
        }}
        radius={200}
        shadow={5}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This one has more radius
        </Text>
        <Button type={'flat'} text="Card button" />
      </Card>
      <Card style={{ flex: 1, marginBottom: 20, padding: 16 }}>
        <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
          This is one takes up the full width
        </Text>
        <Button type={'flat'} text="Card button" />
      </Card>
    </Container>
  ))
  .add('full card', () => (
    <Container scroll>
      <Header title={'Card'} />

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
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/1451360/pexels-photo-1451360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <View style={{ flexDirection: 'row' }}>
            <Avatar
              type="image"
              image={
                <Image
                  source={{
                    uri:
                      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
                  }}
                />
              }
              size={40}
            />
            <Text
              style={{ color: 'rgba(0,0,0,.6)', fontSize: 14, marginLeft: 16 }}>
              I don&apos;t like sand. It&apos;s coarse and rough and irritating
              and it gets everywhere.
            </Text>
          </View>
        </CardContent>
      </Card>
    </Container>
  ))
  .add('clickable', () => (
    <Container scroll>
      <Header title={'Clickable Card'} />
      <ScrollView horizontal scrollEnabled={true}>
        <View style={{ flexDirection: 'row' }}>
          <Card
            style={{
              maxWidth: 150,
              width: '100%',
              marginBottom: 50,
              marginRight: 4,
            }}
            shadow={4}
            onPress={() => console.log('clicked dog')}>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
                Penguin
              </Text>
            </CardContent>
          </Card>
          <Card
            style={{
              maxWidth: 150,
              width: '100%',
              marginBottom: 50,
              marginRight: 4,
            }}
            shadow={4}
            onPress={() => console.log('clicked dog')}>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
                Pup
              </Text>
            </CardContent>
          </Card>
          <Card
            style={{ maxWidth: 150, width: '100%', marginBottom: 50 }}
            shadow={4}
            onPress={() => console.log('clicked dog')}>
            <CardMedia
              image={
                <Image
                  style={{ flex: 1, width: '100%' }}
                  source={{
                    uri:
                      'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
                Panda
              </Text>
            </CardContent>
          </Card>
        </View>
      </ScrollView>

      <Card
        style={{ maxWidth: 300, width: '100%', marginBottom: 50 }}
        shadow={4}
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
              - Man&apos;s best friend
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
            <Badge key={2} content={99}>
              <IconButton name="favorite" color={'#F44336'} size={24} />
            </Badge>,
            { name: 'share' },
          ]}
        />
      </Card>

      <Card
        style={{
          maxWidth: 500,
          width: 500,
          boxSizing: 'borderbox',
          marginTop: 40,
        }}>
        <CardContent>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, padding: 8 }}>
              <Text
                style={{
                  color: 'rgba(0,0,0,.6)',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Jon
              </Text>
              <Text
                style={{
                  color: 'rgba(0,0,0,1)',
                  fontSize: 20,
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Stewart
              </Text>
              <Text
                style={{
                  color: 'rgba(0,0,0,.6)',
                  fontSize: 14,
                  flexWrap: 'wrap',
                }}>
                American comedian, writer, producer, director, activist,
                political commentator, actor, and television host.
              </Text>
            </View>
            <View style={{ flex: 1, overflow: 'hidden' }}>
              <Image
                style={{ width: 250, height: 200 }}
                source={{
                  uri:
                    'https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDkyNjI5NTE1/jon-stewart-16242282-1-402.jpg',
                }}
              />
            </View>
          </View>
        </CardContent>
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
          action={
            <IconButton name="more-vert" size={24} color={'rgba(0,0,0,.54)'} />
          }
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
          <Text style={{ color: 'rgba(0,0,0,.6)' }}>Movember is over.</Text>
        </CardContent>
        <CardActions
          rightActionItems={[
            { name: 'reply' },
            { name: 'thumb-up' },
            { name: 'share' },
          ]}
        />
      </Card>
      <Card
        style={{ maxWidth: 400, width: '100%', marginTop: 60 }}
        radius={1}
        shadow={4}>
        <CardHeader
          subtitle={'Mario - 25 mins ago'}
          style={{
            alignItems: 'center',
            borderBottom: 'none',
            paddingBottom: 0,
          }}
          action={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconButton name="star" size={24} color={'rgba(0,0,0,.47)'} />
              <IconButton name="delete" size={24} color={'rgba(0,0,0,.47)'} />
              <IconButton
                name="more-vert"
                size={24}
                color={'rgba(0,0,0,.47)'}
              />
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
            </View>
          }>
          <Text>Mario - 25 mins ago</Text>
        </CardHeader>

        <CardContent style={{ paddingTop: 4, paddingBottom: 16 }}>
          <Text
            style={{ color: 'rgba(0,0,0,1)', fontSize: 18, marginBottom: 4 }}>
            Where is the Princess?
          </Text>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            {`I've defeated Bowser in 6 castles and still no Prin...`}
          </Text>
        </CardContent>
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

      <Card style={{ maxWidth: 400, width: '100%', marginTop: 40 }}>
        <CardMedia
          title={'Flights now 30% off'}
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{
                uri:
                  'https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              resizeMode="cover"
            />
          }
        />

        <CardActions
          rightActionItems={[
            <Button key={1} text={'Learn More'} />,
            <Button key={2} text={'Buy Now'} type="contained" />,
          ]}
        />
      </Card>
    </Container>
  ));
