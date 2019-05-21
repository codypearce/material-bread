import React, { Component } from 'react';

import { ComponentPageLayout } from '@components';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';
import Demos from './Demos';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Props' },
  { name: 'Demos' },
  { name: 'delete', sub: true },
  { name: 'icons', sub: true },
  { name: 'custom', sub: true },
];

export default class ChipPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'chip'}
          title={'Chip'}
          description={
            'Chips are compact elements that represent an input, attribute, or action.'
          }
          docsLink={'https://material.io/design/components/chips.html'}
          importCode={`import { Chip } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/chip'} />
          <Usage pageHref={'/components/chip'} />
          <Props pageHref={'/components/chip'} />
          <Demos pageHref={'/components/chip'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
