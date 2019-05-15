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
          componentName={'tooltip'}
          title={'Tooltip'}
          description={`Tooltips display informative text when users hover over, focus on, or tap an element.`}
          importCode={`import { Tooltip } from 'material-bread';`}
          docsLink={'https://material.io/design/components/tooltips.html#'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/tooltip'} />
          <Usage pageHref={'/components/tooltip'} />
          <Props pageHref={'/components/tooltip'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
