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
  { name: 'leading icon', sub: true },
  { name: 'trailing icon', sub: true },
  { name: 'helper text', sub: true },
  { name: 'dense', sub: true },
  { name: 'prefix suffix', sub: true },
];

export default class TextFieldPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'textfield'}
          title={'TextField'}
          description={`Text fields let users enter and edit text.`}
          importCode={`import { TextField } from 'material-bread';`}
          docsLink={'https://material.io/design/components/text-fields.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/textfield'} />
          <Usage pageHref={'/components/textfield'} />
          <Props pageHref={'/components/textfield'} />
          <Demos pageHref={'/components/textfield'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
