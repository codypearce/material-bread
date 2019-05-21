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
];

export default class CardContentPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-content'}
          title={'Card Content'}
          description={
            'Card content allows for arbitrary content to be shown in a card.'
          }
          importCode={`import { CardContent } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/card-content'} />
          <Usage pageHref={'/components/card-content'} />
          <Props pageHref={'/components/card-content'} />
          <Demos pageHref={'/components/card-content'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
