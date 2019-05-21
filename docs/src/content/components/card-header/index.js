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
];

export default class CardHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-header'}
          title={'Card Header'}
          description={
            'CardHeader displays information and actions about the card.'
          }
          importCode={`import { CardHeader } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/card-header'} />
          <Usage pageHref={'/components/card-header'} />
          <Props pageHref={'/components/card-header'} />
          <Demos pageHref={'/components/card-header'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
