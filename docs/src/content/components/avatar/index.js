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
  { name: 'icons', sub: true },
  { name: 'text', sub: true },
  { name: 'custom', sub: true },
];

export default class AvatarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'avatar'}
          title={'Avatar'}
          description={
            'Avatars are used to represent the user, other users, or contextual icons.'
          }
          importCode={`import { Avatar } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/avatar'} />
          <Usage pageHref={'/components/avatar'} />
          <Props pageHref={'/components/avatar'} />
          <Demos pageHref={'/components/avatar'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
