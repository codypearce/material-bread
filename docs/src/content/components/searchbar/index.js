import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Searchbar } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/searchbar/propData';

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
        <View>
          <Searchbar
            label={'Label'}
            value={this.state.search}
            onChangeText={value => this.setState({ search: value })}
            onCloseIcon={() => this.setState({ search: '' })}
          />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'material-bread';

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
        <Searchbar
          label={'Label'}
          value={this.state.search}
          onChangeText={value => this.setState({ search: value })}
          onCloseIcon={() => this.setState({ search: '' })}
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
          componentName={'searchbar'}
          title={'Searchbar'}
          description={`Searchbar displays as a full appbar for searching`}
          importCode={`import { Searchbar } from 'material-bread';`}
          componentDescription={`The Searchbar component is a convenient component for displaying a full searchbar in an appbar. Usually this component is used on mobile.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Searchbar,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/searchbar#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
