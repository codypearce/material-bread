import React, { Component } from 'react';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import FullPalette from '../../../components/ColorPalette/FullPalette';
import MainDemo from './MainDemo';
import Usage from './Usage';

const sections = [
  { name: 'Component' },
  { name: 'Usage' },
  { name: 'Palette' },
];

export default class ColorPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'color'}
          title={'Color'}
          description={`The Material Design color system can be used to create a color theme that reflects your brand or style`}
          importCode={`import { Colors } from 'material-bread';`}
          docsLink={'https://material.io/design/color/'}
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/utils/colors'} />
          <Usage pageHref={'/utils/colors'} />
          <Section name="Palette" href="/utils/colors#palette" id="palette">
            <ComponentDescription text="Click a block to copy the hex value" />
            <FullPalette />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
