import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DividerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'divider'}
          title={'Divider'}
          description={`A divider is a thin line that groups content in lists and layouts.`}
          importCode={`import { Divider } from 'material-bread';`}
          docsLink={'https://material.io/design/components/dividers.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/dialog'} />
          <Usage pageHref={'/components/dialog'} />
          <Props pageHref={'/components/dialog'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
