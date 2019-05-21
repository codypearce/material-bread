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
  { name: 'singeline', sub: true },
  { name: 'threeline', sub: true },
];

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'banner'}
          title={'Banner'}
          description={
            'A banner displays a prominent message and related optional actions.'
          }
          docsLink={'https://material.io/design/components/banners.html#'}
          importCode={`import { Banner } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/banner'} />
          <Usage pageHref={'/components/banner'} />
          <Props pageHref={'/components/banner'} />
          <Demos pageHref={'/components/banner'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
