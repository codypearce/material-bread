import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Paper } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/paper/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class PaperDemo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Paper
              style={{
                height: 100,
                width: 100,
                alignItems: 'center',
              }}
              shadow={2}
            />
            <Paper
              style={{
                height: 100,
                width: 100,
              }}
              shadow={4}
            />
            <Paper
              style={{
                height: 100,
                width: 100,
              }}
              shadow={8}
            />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Paper } from 'material-bread';

class PaperDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
     <View style={{flexDirection: 'row'}}>
      <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            alignItems: 'center',
          }}
          elevation={2}
        />
        <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          elevation={4}
        />
        <Paper
          style={{
            padding: 8,
            height: 100,
            width: 100,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          elevation={8}
        />
     </View>
    );
  }
}`;

export default class PaperPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'paper'}
          title={'Paper'}
          description={`Material Design has three-dimensional qualities that are reflected in its use of surfaces, depth, and shadows.`}
          importCode={`import { Paper } from 'material-bread';`}
          docsLink={'https://material.io/design/environment/surfaces.html'}
          componentDescription={`Paper is a base component for displaying surfaces with shadow.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Paper,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/paper#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
