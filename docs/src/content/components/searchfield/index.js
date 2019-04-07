import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class SearchBarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'searchfield'}
          title={'SearchField'}
          description={`SearchField allows the user to enter and clear a search.`}
          importCode={`import { SearchField } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/searchfield'} />
          <Usage pageHref={'/components/searchfield'} />
          <Props pageHref={'/components/searchfield'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
