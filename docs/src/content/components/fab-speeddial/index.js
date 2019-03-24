import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { FabSpeedDial } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/fab-speeddial/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class FabPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      const actions = [
        {
          text: 'Favorites',
        },
        {
          text: 'Language',
        },
        {
          text: 'Location',
        },
        {
          text: 'Video',
        },
      ];
      return (
        <View>
          <FabSpeedDial actions={actions} />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { FabSpeedDial} from 'material-bread';

class FabPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const actions = [
      {
        text: 'Favorites',
      },
      {
        text: 'Language',
      },
      {
        text: 'Location',
      },
      {
        text: 'Video',
      },
    ];
    return (
      <View>
        <FabSpeedDial actions={actions} />
      </View>
    );
  }
}`;

export default class FabPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'fab-speeddial'}
          title={'Fab Speed Dial'}
          description={`Fab Speed Dial toggles more actions extending from Fab.`}
          importCode={`import { FabSpeedDial } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/buttons-floating-action-button.html'
          }
          componentDescription={`Fab Speed Dials accept an array of actions that will animate out from the main Fab.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            FabSpeedDial,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/fab-speeddial#demos"
            id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
