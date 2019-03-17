import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { ProgressBar, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ),
  createPropData('color', 'Color of bar', 'sstring', ''),
  createPropData(
    'determinate',
    'Whether bar continues to animate or not',
    'bool',
    '',
  ),
  createPropData('easing', 'Easing function for bar animation', 'func', ''),
  createPropData('height', 'Height of track and indicator', 'number', '4'),
  createPropData(
    'indcatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ),

  createPropData('style', 'Styles root element', 'object', ''),
  createPropData(
    'trackStyle',
    'Styles track containing the indicator',
    'object',
    '',
  ),
  createPropData(
    'value',
    'Percent out of 100 the indcator should fill in determinate mode',
    'number',
    '',
  ),
  createPropData('visible', 'Whether bar is visible or not', 'bool', ''),
];

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
          <Section name="Demos" href="/components/tablecell#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
