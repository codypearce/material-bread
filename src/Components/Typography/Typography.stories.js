import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { View } from 'react-native';

import { Heading, Subtitle, BodyText, Caption, Overline } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

export default storiesOf('Components|Typography', module)
  .addParameters({
    jest: ['BodyText', 'Caption', 'Heading', 'Overline', 'Subtitle'],
  })
  .add('Components', () => (
    <Container>
      <Header title={'Typography'} />
      <View style={{ marginTop: 50 }}>
        <Heading type={1} text="h1" />
        <Heading type={2} text="h2" />
        <Heading type={3} text="h3" />
        <Heading type={4} text="h4" />
        <Heading type={5} text="h5" />
        <Heading type={6} text="h6" />
        <Subtitle type={1} text="Subtitle 1" />
        <Subtitle type={2} text="Subtitle 2" />
        <BodyText type={1} text="Body 2" />
        <BodyText type={2} text="Body 2" />
        <Caption text="Caption" />
        <Overline text="Overline" />
      </View>
    </Container>
  ));
