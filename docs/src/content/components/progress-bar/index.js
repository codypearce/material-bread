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
  { name: 'determinate', sub: true },
];

export default class DataTableHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'progress-bar'}
          title={'Progress Bar'}
          description={`Progress indicators express an unspecified wait time or display the length of a process.`}
          importCode={`import { ProgressBar } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/progress-indicators.html#linear-progress-indicators'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/progress-bar'} />
          <Usage pageHref={'/components/progress-bar'} />
          <Props pageHref={'/components/progress-bar'} />
          <Demos pageHref={'/components/progress-bar'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
