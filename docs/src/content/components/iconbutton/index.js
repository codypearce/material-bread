import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';

import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'iconbutton'}
          title={'Icon Button'}
          description={`Icon Buttons turn Icons into clickable actions`}
          importCode={`import { IconButton } from 'material-bread';`}
          docsLink={'https://material.io/design/iconography/product-icons.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/iconbutton'} />
          <Usage pageHref={'/components/iconbutton'} />
          <Props pageHref={'/components/iconbutton'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
