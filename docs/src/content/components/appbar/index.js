import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import {
  Appbar,
  IconButton,
  Button,
  Badge,
  SearchField,
  Searchbar,
} from '../../../../../src/index';
import LiveEdit from '../../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import Link from '../../../components/Link';
import CodeInline from '../../../components/CodeInline';
import propData from './propData';
import Demos from './Demos';
import { componentDemoCode } from './Demos/component';
import { usageCode } from './Demos/usage';

const sections = [
  { name: 'Demos' },
  { name: 'bg image', sub: true },
  { name: 'search field', sub: true },
  { name: 'search bar', sub: true },
  { name: 'subtitle', sub: true },
  { name: 'custom', sub: true },
];

export default class AppbarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'appbar'}
          title={'Appbar Top'}
          description={
            'The top app bar displays information and actions relating to the current screen.'
          }
          componentDescription={
            <div>
              Appbars are essentially broken into three parts: navigation,
              title, and action buttons. Many combinations are possible using
              these sections, but if you need more customization you can replace
              all of them by passing{' '}
              <CodeInline code="children" type={'prop'} />.
            </div>
          }
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          sideScrollMenuItems={sections}
          importCode={`import { Appbar } from 'material-bread';`}
          liveEditCode={componentDemoCode}
          liveEditScope={{ Appbar, IconButton, Image, Badge }}
          usageCode={usageCode}
          usageDescription={
            <div>
              Usage depends entirely on what kind of navigation you are using in
              your app. For example, in <CodeInline code="react-navigation" />{' '}
              you can replace the entire header with a{' '}
              <Link href="  https://hackernoon.com/how-to-use-a-custom-header-and-custom-bottom-tab-bar-for-react-native-with-react-navigation-969a5d3cabb1">
                custom appbar
              </Link>
              .
            </div>
          }
          propData={propData}>
          <Demos />
        </ComponentPageLayout>
      </div>
    );
  }
}
