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
  { name: 'ranged', sub: true },
];

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'slider'}
          title={'Slider'}
          description={`Sliders allow users to make selections from a range of values.`}
          importCode={`import { Slider } from 'material-bread';`}
          docsLink={'https://material.io/design/components/sliders.html#'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/slider'} />
          <Usage pageHref={'/components/slider'} />
          <Props pageHref={'/components/slider'} />
          <Demos pageHref={'/components/slider'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
