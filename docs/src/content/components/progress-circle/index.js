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
          componentName={'progress-circle'}
          title={'Progress Circle'}
          description={`Progress indicators express an unspecified wait time or display the length of a process.`}
          importCode={`import { ProgressBar } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/progress-indicators.html#circular-progress-indicators'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/progress-circle'} />
          <Usage pageHref={'/components/progress-circle'} />
          <Props pageHref={'/components/progress-circle'} />
          <Demos pageHref={'/components/progress-circle'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
