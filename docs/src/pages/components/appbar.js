import React, { Component } from 'react';

import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Appbar } from '../../../../src/index';

const sections = [{ name: 'Demos' }, { name: 'with search', sub: true }];

const propData = [
  createPropData(
    'backgroundColor',
    'styles root backgroundColor',
    'string',
    'Theme.primaryColor',
  ),
  createPropData('position', 'adds position as expected', 'string', 'fixed'),
  createPropData('style', 'styles the root component', 'object', ''),
];

const usageCode = `import React  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>
    );
  }
}`;
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
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          sideScrollMenuItems={sections}
          importCode={`import { Appbar } from 'material-bread';`}
          liveEditCode="<Appbar title={'Page Title'} />"
          liveEditScope={{ Appbar }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/appbar#demos" id="demos" />
          <Section
            name="with Search"
            href="/components/appbar#with-search"
            id="with-search"
          />
        </ComponentPageLayout>
      </div>
    );
  }
}
