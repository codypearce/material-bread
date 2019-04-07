import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class PaperPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'paper'}
          title={'Paper'}
          description={`Material Design has three-dimensional qualities that are reflected in its use of surfaces, depth, and shadows.`}
          importCode={`import { Paper } from 'material-bread';`}
          docsLink={'https://material.io/design/environment/surfaces.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/paper'} />
          <Usage pageHref={'/components/paper'} />
          <Props pageHref={'/components/paper'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
