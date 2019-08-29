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
  { name: 'footer', sub: true },
];

export default class Snackbarpage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'swipnav'}
          title={'SwipeNav'}
          description={`SwipeNav shows and hides headers and footer on scroll`}
          importCode={`import { SwipeNav } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/swipenav'} />
          <Usage pageHref={'/components/swipenav'} />
          <Props pageHref={'/components/swipenav'} />
          <Demos pageHref={'/components/slider'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
