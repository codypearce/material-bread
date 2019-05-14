import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'sheet-bottom'}
          title={'SheetBottom'}
          description={`Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.
          `}
          importCode={`import { SheetBottom } from 'material-bread';`}
          docsLink={'https://material.io/design/components/sheets-bottom.html#'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/sheet-bottom'} />
          <Usage pageHref={'/components/sheet-bottom'} />
          <Props pageHref={'/components/sheet-bottom'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
