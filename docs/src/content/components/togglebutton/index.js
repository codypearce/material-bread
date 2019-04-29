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
  { name: 'custom', sub: true },
];

export default class ToggleButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'togglebutton'}
          title={'ToggleButton'}
          description={`Toggle Buttons indicate active and inactive states`}
          importCode={`import { ToggleButton } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/togglebutton'} />
          <Usage pageHref={'/components/togglebutton'} />
          <Props pageHref={'/components/togglebutton'} />
          <Demos pageHref={'/components/togglebutton'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
