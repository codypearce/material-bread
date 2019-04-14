import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';

import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class AnchorPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'anchor'}
          title={'Anchor'}
          description={`Cross Platform Anchor For linking to outside pages.`}
          importCode={`import { Anchor } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/utils/anchor'} />
          <Usage pageHref={'/utils/anchor'} />
          <Props pageHref={'/utils/anchor'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
