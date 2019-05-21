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
  { name: 'contained', sub: true },
  { name: 'outlined', sub: true },
  { name: 'flat', sub: true },
  { name: 'text', sub: true },
  { name: 'icons', sub: true },
  { name: 'fullwidth', sub: true },
  { name: 'custom', sub: true },
];

export default class ButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'button'}
          title={'Button'}
          description={
            'Buttons allow users to take actions, and make choices, with a single tap.'
          }
          docsLink={'https://material.io/design/components/buttons.html'}
          importCode={`import { Button } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/button'} />
          <Usage pageHref={'/components/button'} />
          <Props pageHref={'/components/button'} />
          <Demos pageHref={'/components/button'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
