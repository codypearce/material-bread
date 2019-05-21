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
  { name: 'subheader', sub: true },
];

export default class BackdropPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'backdrop'}
          title={'Backdrop'}
          description={
            'A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.'
          }
          importCode={`import { Backdrop } from 'material-bread';`}
          docsLink={'https://material.io/design/components/backdrop.html#'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/backdrop'} />
          <Usage pageHref={'/components/backdrop'} />
          <Props pageHref={'/components/backdrop'} />
          <Demos pageHref={'/components/backdrop'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
