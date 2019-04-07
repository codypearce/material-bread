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
          componentName={'snackbar'}
          title={'Snackbar'}
          description={`Snackbars provide brief messages about app processes at the bottom of the screen.`}
          importCode={`import { Snackbar } from 'material-bread';`}
          docsLink={'https://material.io/design/components/snackbars.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/snackbar'} />
          <Usage pageHref={'/components/snackbar'} />
          <Props pageHref={'/components/snackbar'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
