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
  { name: 'Action Media', sub: true },
  { name: 'Clickable', sub: true },
];

export default class CardPage extends Component {
  render() {
    return (
      <ComponentPageLayout
        componentName={'card'}
        title={'Card'}
        description={
          'Cards contain content and actions about a single subject.'
        }
        importCode={`import { Card } from 'material-bread';`}
        docsLink={'https://material.io/design/components/cards.html'}
        sideScrollMenuItems={sections}>
        <MainDemo pageHref={'/components/card'} />
        <Usage pageHref={'/components/card'} />
        <Props pageHref={'/components/card'} />
        <Demos pageHref={'/components/card'} />
      </ComponentPageLayout>
    );
  }
}
