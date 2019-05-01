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
  { name: 'loader', sub: true },
  { name: 'labels', sub: true },
];

export default class SwitchPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'switch'}
          title={'Switch'}
          description={`Switches toggle the state of a single setting on or off.`}
          importCode={`import { Switch } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/selection-controls.html#switches'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/switch'} />
          <Usage pageHref={'/components/switch'} />
          <Props pageHref={'/components/switch'} />
          <Demos pageHref={'/components/switch'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
