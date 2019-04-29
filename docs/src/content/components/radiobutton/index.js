import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';
import Demos from './Demos';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Props' },
  { name: 'Demos' },
  { name: 'labels', sub: true },
];

export default class RadioButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'radiobutton'}
          title={'Radio Button '}
          description={`Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options.`}
          importCode={`import { RadioButton } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/selection-controls.html#radio-buttons'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/radiobutton'} />
          <Usage pageHref={'/components/radiobutton'} />
          <Props pageHref={'/components/radiobutton'} />
          <Demos pageHref={'/components/radiobutton'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
