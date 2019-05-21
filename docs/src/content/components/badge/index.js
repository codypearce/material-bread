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
  { name: 'dot', sub: true },
  { name: 'animated', sub: true },
];

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'badge'}
          title={'Badge'}
          description={'Badges display status information.'}
          importCode={`import { Badge } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/badge'} />
          <Usage pageHref={'/components/badge'} />
          <Props pageHref={'/components/badge'} />
          <Demos pageHref={'/components/badge'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
