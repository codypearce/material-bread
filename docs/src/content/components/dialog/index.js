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
  { name: 'alert', sub: true },
  { name: 'simple', sub: true },
];

export default class DialogPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dialog'}
          title={'Dialog'}
          description={`Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.`}
          importCode={`import { Dialog } from 'material-bread';`}
          docsLink={'https://material.io/design/components/dialogs.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/dialog'} />
          <Usage pageHref={'/components/dialog'} />
          <Props pageHref={'/components/dialog'} />
          <Demos pageHref={'/components/dialog'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
