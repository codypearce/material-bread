import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { ProgressCircle, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ),
  createPropData('animationEasing', 'Easaing function', 'func', ''),
  createPropData('color', 'Color of bar', 'sstring', ''),
  createPropData(
    'determinate',
    'Whether bar continues to animate or not',
    'bool',
    '',
  ),
  createPropData('easing', 'Easing function for bar animation', 'func', ''),
  createPropData(
    'indcatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ),
  createPropData('size', 'Diameter of circle', 'number', '48'),
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
class ProgressCircleDemo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        circleValue3: 50
      }
    }
    render() {
      return (
        <View>
            <ProgressCircle color={'#E91E63'} />

            <ProgressCircle
              value={this.state.circleValue3}
              size={48}
              thickness={4}
              color="#2b80ff"
              unfilledColor="#f2f2f2"
              animationMethod="timing"
              animationConfig={{ speed: 1 }}
              shouldAnimateFirstValue
              determinate
            />

            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              onPress={() => {
                this.setState({
                  circleValue3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}
              text={'Change Value'}
              />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ProgressCircle } from 'material-bread';

class ProgressCircleDemo extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <ProgressCircle color={'#E91E63'} />
        </View>
      );
    }
}`;

export default class DataTableHeaderPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'progress-circle'}
          title={'Progress Circle'}
          description={`Progress indicators express an unspecified wait time or display the length of a process.`}
          importCode={`import { ProgressBar } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/progress-indicators.html#circular-progress-indicators'
          }
          componentDescription={`Progress circles can be determinate or indeterminate. If determinate you must provide a value for the animation to stop at.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            ProgressCircle,
            Button,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/progress-circle#demos"
            id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
