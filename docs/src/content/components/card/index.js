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
        <MainDemo pageHref={'/components/button'} />
        <Usage pageHref={'/components/button'} />
        <Props pageHref={'/components/button'} />
        <Demos pageHref={'/components/button'} />
      </ComponentPageLayout>
    );
  }
}
