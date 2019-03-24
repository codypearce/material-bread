import React from 'react';
import { Image } from 'react-native';
import {
  LiveEdit,
  Link,
  CodeInline,
  ComponentDescription,
  Section,
} from '@components';
import { Appbar, IconButton } from '../../../../../../src/index';

export const withImageCode = ` <Appbar
barType={'prominent'}
title={'Page Title'} 
backgroundImage={<Image  source={{uri: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />}
navigationType={'menu'}
actionItems={[
  {name: 'favorite'},
  {name: 'search', onPress: () => console.log('onSearch')},
  <IconButton name="more-vert" size={24} color={'white'} />, 
]}
/>`;

const WithImage = () => (
  <Section
    name="Background image"
    href="/components/appbar#bg-image"
    id="bg-image">
    <ComponentDescription
      text={
        <div>
          You must pass in an <CodeInline code="Image" type={'element'} />
          component, please read the React Native{' '}
          <Link href="https://facebook.github.io/react-native/docs/images">
            docs on Images
          </Link>{' '}
          to get a better idea of how to pass in images. Generally they are only
          used for <CodeInline code="prominent" type={'value'} /> bars, but can
          be used on other types.
        </div>
      }
    />
    <LiveEdit code={withImageCode} scope={{ Appbar, IconButton, Image }} />
  </Section>
);
export default WithImage;
