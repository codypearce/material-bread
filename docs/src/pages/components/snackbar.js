import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Snackbar, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData(
    'animationDuration',
    'Duration of entering and leaving animation',
    'number',
    '',
  ),
  createPropData('buttonLabel', 'Label for snackbar button', 'string', ''),
  createPropData(
    'onButtonPress',
    'Call back on snackbar button if provided',
    'func',
    '',
  ),
  createPropData('style', 'Styles root element', 'object', ''),
  createPropData('visible', 'Whether snackbar is visible', 'bool', 'false'),
];

const liveEditCode = `
class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        show: false
      }
    }
    render() {
      return (
        <View >
          <Button type="outlined" onPress={() => this.setState({ show: true })} text={'Open Snackbar'} />
          <Snackbar
            visible={this.state.show}
            onButtonPress={() => this.setState({ show: false })}
            buttonLabel={'Ok'}>
            {'This is a snackbar component'}
          </Snackbar>
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Snackbar, Button } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <View >
        <Button type="outlined" onPress={() => this.setState({ show: true })} text={'Open Snackbar'} />
        <Snackbar
          visible={this.state.show}
          onButtonPress={() => this.setState({ show: false })}
          buttonLabel={'Ok'}>
          {'This is a snackbar component'}
        </Snackbar>
      </View>
    );
  }
}`;

export default class Snackbarpage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'snackbar'}
          title={'Snackbar'}
          description={`Snackbars provide brief messages about app processes at the bottom of the screen.`}
          importCode={`import { Snackbar } from 'material-bread';`}
          docsLink={'https://material.io/design/components/snackbars.html'}
          componentDescription={`Snackbars will show at the bottom of the containing component.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Snackbar,
            Button,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/snackbar#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
