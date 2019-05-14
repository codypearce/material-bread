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
          componentName={'sheet-side'}
          title={'SheetSide'}
          description={`Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.
          `}
          importCode={`import { SheetSide } from 'material-bread';`}
          docsLink={'https://material.io/design/components/sheets-side.html#'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/sheet-side'} />
          <Usage pageHref={'/components/sheet-side'} />
          <Props pageHref={'/components/sheet-side'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
