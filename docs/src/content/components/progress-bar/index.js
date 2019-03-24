import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { ProgressBar, Button } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/progress-bar/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class ProgressBarDemo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible2: true,
        value2: 50
      }
    }
    render() {
      return (
        <View>
          <ProgressBar
            value={50}
            animationDuration={2000}
            trackStyle={{ marginTop: 40 }}
            visible
          />
          <ProgressBar
            determinate
            value={this.state.value2}
            animationDuration={2000}
            trackStyle={{ marginTop: 40 }}
            visible={this.state.visible2}
          />
          <Button
            type="outlined"
            style={{ marginTop: 20 }}
            onPress={() => {
              this.setState({
                value2: Math.floor(Math.random() * Math.floor(100)),
              });
            }}
            text={'Change Value'}
          />

          <Button
            type="outlined"
            style={{ marginTop: 20 }}
            animationDuration={500}
            onPress={() => {
              this.setState({
                visible2: !this.state.visible2,
              });
            }}
            text={'Hide / Show Animate'}
          />
           
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ProgressBar } from 'material-bread';

class ProgressBarDemo extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <ProgressBar
            determinate
            value={50}
            animationDuration={2000}
            visible
          />
        </View>
      );
    }
}`;

export default class DataTableHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'progress-bar'}
          title={'Progress Bar'}
          description={`Progress indicators express an unspecified wait time or display the length of a process.`}
          importCode={`import { ProgressBar } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/progress-indicators.html#linear-progress-indicators'
          }
          componentDescription={`Progress bars can be determinate or indeterminate. If determinate you must provide a value for the animation to stop at.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            ProgressBar,
            Button,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/proress-circle#demos"
            id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
