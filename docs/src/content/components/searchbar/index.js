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
          componentName={'searchbar'}
          title={'Searchbar'}
          description={`Searchbar displays as a full appbar for searching`}
          importCode={`import { Searchbar } from 'material-bread';`}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/searchbar'} />
          <Usage pageHref={'/components/searchbar'} />
          <Props pageHref={'/components/searchbar'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
