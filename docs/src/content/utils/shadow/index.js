import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';

const sections = [{ name: 'Component' }, { name: 'Usage' }];

export default class ShadowPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'shadow'}
          title={'Shadow'}
          description={`Shadow is a utility to add cross platform shadows.`}
          importCode={`import { shadow } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/utils/shadow'} />
          <Usage pageHref={'/utils/shadow'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
