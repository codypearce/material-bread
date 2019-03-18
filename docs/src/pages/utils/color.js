import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Colors } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import FullPalette from '../../components/ColorPalette/FullPalette';

const sections = [{ name: 'Palette' }];

const liveEditCode = `
<View style={{flexDirection: 'row'}}>
    <View style={{width: 100, height: 100, backgroundColor: Colors.blue[700]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.red[300]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.teal[500]}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.cyan['A100']}} />
    <View style={{width: 100, height: 100, backgroundColor: Colors.pink['600']}} />
</View>`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{width: 100, height: 100, backgroundColor: Colors.blue[700]}} />
    );
  }
}`;

export default class ColorPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'color'}
          title={'Color'}
          description={`The Material Design color system can be used to create a color theme that reflects your brand or style`}
          importCode={`import { Colors } from 'material-bread';`}
          componentDescription={`Colors can be accessed as shown below.`}
          docsLink={'https://material.io/design/color/'}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Colors,
          }}
          usageCode={usageCode}>
          <Section
            name="Palette"
            href="/components/colors#palette"
            id="palette">
            <ComponentDescription text="Click a block to copy the hex value" />
            <FullPalette />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
