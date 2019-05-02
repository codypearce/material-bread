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
  { name: 'extended', sub: true },
];

export default class FabPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'fab-speeddial'}
          title={'Fab Speed Dial'}
          description={`Fab Speed Dial toggles more actions extending from Fab.`}
          importCode={`import { FabSpeedDial } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/buttons-floating-action-button.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/fab-speeddial'} />
          <Usage pageHref={'/components/fab-speeddial'} />
          <Props pageHref={'/components/fab-speeddial'} />
          <Demos pageHref={'/components/fab-speeddial'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
