import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

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
        </ComponentPageLayout>
      </div>
    );
  }
}
