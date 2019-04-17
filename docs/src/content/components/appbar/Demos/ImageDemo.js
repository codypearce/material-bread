import React from 'react';
import { Image } from 'react-native';
import { Link, CodeInline, ComponentDemo } from '@components';
import { Appbar, IconButton } from '../../../../../../src/index';

export const withImageCode = `<Appbar
  barType={'prominent'}
  title={'Background image'}
  color={'#9C27B0'}
  navigation={'menu'}
  backgroundImage={
    <Image
      source={{
        uri:
          "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }}/>
    }
/>`;

const WithImage = () => (
  <ComponentDemo
    sectionName={'Background image'}
    sectionHref={'/components/appbar#bg-image'}
    sectionId={'bg-image'}
    description={
      <div>
        You must pass in an <CodeInline code="Image" type={'element'} />
        component, please read the React Native{' '}
        <Link href="https://facebook.github.io/react-native/docs/images">
          docs on Images
        </Link>{' '}
        to get a better idea of how to pass in images. Generally they are only
        used for <CodeInline code="prominent" type={'value'} /> bars, but can be
        used on other types.
      </div>
    }
    code={withImageCode}
    scope={{ Appbar, IconButton, Image }}
  />
);
export default WithImage;
