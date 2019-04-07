import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

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
          <MainDemo pageHref={'/components/hoverable'} />
          <Usage pageHref={'/components/hoverable'} />
          <Props pageHref={'/components/hoverable'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
