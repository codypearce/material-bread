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
          componentName={'icon'}
          title={'Icon'}
          description={`Icons symbolize meaning and represent common actions.`}
          importCode={`import { Icon } from 'material-bread';`}
          docsLink={'https://material.io/design/iconography/product-icons.html'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/icon'} />
          <Usage pageHref={'/components/icon'} />
          <Props pageHref={'/components/icon'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
