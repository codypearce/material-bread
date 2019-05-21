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
  { name: 'label', sub: true },
  { name: 'icon', sub: true },
  { name: 'ios', sub: true },
];

export default class CheckboxPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'checkbox'}
          title={'Checkbox'}
          description={
            'Checkboxes allow the user to select one or more items from a set.'
          }
          docsLink={
            'https://material.io/design/components/selection-controls.html#checkboxes'
          }
          importCode={`import { Checkbox } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/checkbox'} />
          <Usage pageHref={'/components/checkbox'} />
          <Props pageHref={'/components/checkbox'} />
          <Demos pageHref={'/components/checkbox'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
