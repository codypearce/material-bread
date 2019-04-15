import React from 'react';
import { View } from 'react-native';

import { Anchor, Button, Heading, IconButton } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Utils|Anchor', module)
  .addParameters({ jest: ['Anchor'] })
  .add('Simple', () => (
    <Container>
      <Header
        title={'Anchor'}
        subtitle={'Cross Platform Anchor to link to other pages'}
      />
      <View style={{ flexDirection: 'row' }}>
        <Anchor url={'http://material-bread.org/'} target={'_parent'}>
          <Button
            text={'Documentation'}
            type={'outlined'}
            textColor={'rgb(233, 30, 99)'}
          />
        </Anchor>

        <Anchor
          url={'https://github.com/codypearce/material-bread'}
          target={'_parent'}>
          <Button
            text={'Github'}
            type={'outlined'}
            textColor={'#666'}
            style={{ marginLeft: 10 }}
          />
        </Anchor>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Anchor url={'https://www.nasa.gov/'} target={'_parent'}>
          <Button text={'NASA'} />
        </Anchor>

        <Anchor url={'https://www.wikipedia.org/'} target={'_parent'}>
          <Button style={{ marginLeft: 40 }} text={'Wikipedia'} />
        </Anchor>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Anchor url={'https://www.pbs.org/'} target={'_blank'}>
          <Heading style={{ color: 'blue' }}>PBS</Heading>
        </Anchor>
        <Anchor url={'https://www.bbc.com/'} target={'_blank'}>
          <Heading style={{ color: 'blue', marginLeft: 20 }}>BBC</Heading>
        </Anchor>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Anchor url={'https://www.google.com'} target={'_blank'}>
          <IconButton size={24} name="search" />
        </Anchor>
        <Anchor url={'https://www.google.com/maps'} target={'_blank'}>
          <IconButton size={24} style={{ marginLeft: 20 }} name="map" />
        </Anchor>
      </View>
    </Container>
  ));
