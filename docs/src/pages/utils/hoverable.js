import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Hoverable } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import propData from '../../content/utils/hoverable/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#009688'
    }
  }

  handleHover(toggle) {
    this.setState({ color: toggle ? '#00BCD4' : '#009688' });
  }

  render() {
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}
      >
        <View style={{width: 200, height: 125, backgroundColor: this.state.color}} />
    </Hoverable>
    );
  }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Hoverable } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#009688'
    }
  }

handleHover(toggle) {
  this.setState({ color: toggle ? '#00BCD4' : '#009688' });
}

  render() {
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}
      >
        <View style={{width: 200, height: 125, backgroundColor: this.state.color}} />
    </Hoverable>
    );
  }
}`;

export default class HoverablePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'hoverable'}
          title={'Hoverable'}
          description={`Hoverable is a utility to add changes on hover.`}
          importCode={`import { Hoverable } from 'material-bread';`}
          componentDescription={`Wrap a component in Hoverable and activate a change when the user hovers over a component.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Hoverable,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/hoverable#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
