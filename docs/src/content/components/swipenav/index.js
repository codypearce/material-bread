import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class Snackbarpage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'swipnav'}
          title={'SwipeNav'}
          description={`SwipeNav shows and hides headers on scroll`}
          importCode={`import { SwipeNav } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/swipenav'} />
          <Usage pageHref={'/components/swipenav'} />
          <Props pageHref={'/components/swipenav'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
