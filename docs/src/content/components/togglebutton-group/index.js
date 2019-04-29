import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class ToggleButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'togglebutton-group'}
          title={'ToggleButtonGroup'}
          description={`Toggle Buttons indicate active and inactive states`}
          importCode={`import { ToggleButtonGroup } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/togglebutton-group'} />
          <Usage pageHref={'/components/togglebutton-group'} />
          <Props pageHref={'/components/togglebutton-group'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
