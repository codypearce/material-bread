import React from 'react';
import { Text, View } from 'react-native';

import { Ripple, Card, Avatar } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Ripple', module)
  .addParameters({ jest: ['Ripple'] })
  .add('from click', () => (
    <Container scroll>
      <Header title={'Ripple from where it was clicked'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Ripple
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
        <Ripple style={{ width: 200, height: 200, marginLeft: 40 }}>
          <Card
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </Card>
        </Ripple>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40 }}>
        <Ripple
          rippleColor={'#E91E63'}
          rippleContainerBorderRadius={100}
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar
            type="icon"
            content="add"
            size={48}
            color={'#E91E63'}
            contentColor={'white'}
          />
        </Ripple>
        <Ripple
          rippleColor={'#9C27B0'}
          style={{
            width: 300,
            height: 200,
            marginLeft: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          rippleContainerBorderRadius={100}>
          <Text>Massive Button</Text>
        </Ripple>
      </View>
    </Container>
  ))
  .add('from center', () => (
    <Container scroll>
      <Header title={'Ripple form center'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Ripple
          rippleColor={'blue'}
          rippleCentered
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
        <Ripple
          rippleCentered
          style={{ width: 200, height: 200, marginLeft: 40 }}>
          <Card
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </Card>
        </Ripple>
      </View>
    </Container>
  ))
  .add('sequential', () => (
    <Container scroll>
      <Header title={'Sequential Ripple'} />
      <Text style={{ marginBottom: 40 }}>
        Try clicking quickly versus other demos
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Ripple
          rippleColor={'blue'}
          rippleSequential
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
        <Ripple
          rippleCentered
          rippleSequential
          style={{ width: 200, height: 200, marginLeft: 40 }}>
          <Card
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </Card>
        </Ripple>
      </View>
    </Container>
  ))
  .add('speed', () => (
    <Container scroll>
      <Header title={'Speed Ripple'} />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Ripple
          rippleColor={'blue'}
          rippleDuration={250}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Really fast</Text>
        </Ripple>
        <Ripple
          rippleCentered
          rippleDuration={1000}
          style={{ width: 200, height: 200, marginLeft: 40 }}>
          <Card
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Really Slow</Text>
          </Card>
        </Ripple>
      </View>
    </Container>
  ));
