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

export default class CardMediaPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-media'}
          title={'Card Media'}
          description={'CardMedia displays an image on a card.'}
          importCode={`import { CardMedia } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/card-media'} />
          <Usage pageHref={'/components/card-media'} />
          <Props pageHref={'/components/card-media'} />
          <Demos pageHref={'/components/card-media'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
