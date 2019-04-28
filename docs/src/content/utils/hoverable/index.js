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
  { name: 'animated', sub: true },
];

export default class HoverablePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'hoverable'}
          title={'Hoverable'}
          description={`Hoverable is a utility to add changes on hover.`}
          importCode={`import { Hoverable } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/utils/hoverable'} />
          <Usage pageHref={'/utils/hoverable'} />
          <Props pageHref={'/utils/hoverable'} />
          <Demos pageHref={'/utils/hoverable'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
