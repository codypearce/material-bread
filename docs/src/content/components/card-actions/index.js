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
  { name: 'custom', sub: true },
];

export default class CardPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-actions'}
          title={'Card Actions'}
          description={
            'Card action buttons displayed at the bottom of most the cards.'
          }
          importCode={`import { CardActions } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/card-actions'} />
          <Usage pageHref={'/components/card-actions'} />
          <Props pageHref={'/components/card-actions'} />
          <Demos pageHref={'/components/card-actions'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
