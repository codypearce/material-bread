import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Fab } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/fab/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class FabPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <View>
          <Fab />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Fab} from 'material-bread';

class FabPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Fab />
      </View>
    );
  }
}`;

export default class FabPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'fab'}
          title={'Floating Action Button'}
          description={`A floating action button (FAB) represents the primary action of a screen.`}
          importCode={`import { Fab } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/buttons-floating-action-button.html'
          }
          componentDescription={`Fabs can have different icons, color, or inner content.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Fab,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/fab#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
