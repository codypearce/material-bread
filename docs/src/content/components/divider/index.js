import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Divider } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/divider/propData';
const sections = [{ name: 'Demos' }];

const liveEditCode = `
class Dividers extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <Divider />
          <Divider />
          <Divider marginVertical={24} />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'material-bread';

class Dividerpage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <Divider />
        </View>
      );
    }
}`;

export default class DividerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'divider'}
          title={'Divider'}
          description={`A divider is a thin line that groups content in lists and layouts.`}
          importCode={`import { Divider } from 'material-bread';`}
          docsLink={'https://material.io/design/components/dividers.html'}
          componentDescription={`Dividers can be used in most components to create a visible separation between sections.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Divider,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/tablecell#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
