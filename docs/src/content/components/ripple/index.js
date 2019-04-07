import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';

import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class RipplePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'ripple'}
          title={'Ripple'}
          description={`Ripple adds animation feedback to interactions.`}
          importCode={`import { Ripple } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/ripple'} />
          <Usage pageHref={'/components/ripple'} />
          <Props pageHref={'/components/ripple'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
