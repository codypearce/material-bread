import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { SearchField } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/searchfield/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        search: ''
      }
    }
    render() {
      return (
        <View >
          <SearchField 
            color={'#E91E63'}
            value={this.state.search}
            onChangeText={(search) => this.setState({search})}
            onCloseIcon={() => this.setState({search: ''})}
          />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchField } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <View>
        <SearchField 
          color={'#E91E63'}
          value={this.state.search}
          onChangeText={(search) => this.setState({search})}
          onCloseIcon={() => this.setState({search: ''})}
        />
      </View>
    );
  }
}`;

export default class SearchBarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'searchfield'}
          title={'SearchField'}
          description={`SearchField allows the user to enter and clear a search.`}
          importCode={`import { SearchField } from 'material-bread';`}
          componentDescription={`SearchField is a convenient component for displaying a simple search component.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            SearchField,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/searchfield#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
