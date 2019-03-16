import React, { Component } from 'react';
import { View, Text } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Icon, Checkbox } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'label', sub: true },
  { name: 'icon', sub: true },
  { name: 'ios', sub: true },
];

const propData = [
  createPropData(
    'checkboxColor',
    'Custom color for checked icon',
    'string',
    '',
  ),
  createPropData('checkboxStyle', 'Styles checkbox icon', 'object', ''),

  createPropData(
    'checked',
    'Wether the checkbox is filled or not',
    'bool',
    'false',
  ),
  createPropData(
    'checkedIcon',
    'Renders checked icon',
    'string || node',
    'check-box',
  ),
  createPropData(
    'disabled',
    'Toggles whether the checkbox can be toggled',
    'bool',
    '',
  ),
  createPropData(
    'icon',
    'Renders unchecked icon',
    'string || node',
    'check-box-outline-blank',
  ),
  createPropData('indeterminate', 'Toggle indeteminate state', 'bool', ''),
  createPropData('ios', 'Toggle dispalying ios checkbox', 'bool', 'false'),
  createPropData(
    'label',
    'Text for label of checkbox, has Onpress',
    'bool',
    '',
  ),
  createPropData(
    'labelPos',
    'Determines position of label',
    'string',
    'right ',
  ),
  createPropData('labelStyle', 'Styles label', 'object', ''),
  createPropData(
    'onPress',
    'Call back for clicking on the checkbox or label',
    'func',
    '',
  ),
  createPropData('rippleColor', 'Custom ripple color', 'string', ''),
  createPropData(
    'rippleMatchesCheckbox',
    'Default Material is dark ripple,  this forces the ripple to match checkbox',
    'bool',
    'false',
  ),
  createPropData('styles', 'Styles root container', 'object', ''),
  createPropData(
    'unCheckedColor',
    'Custom color for unchecked icon',
    'string',
    '',
  ),
];

const liveEditCode = `
class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedOne: true,
        checkedTwo: true,
        checkedThree: true,
        checkedFour: true,
        checkedFive: true
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Checkbox
                checked={this.state.checkedOne}
                onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#009688'}
                checked={this.state.checkedTwo}
                label={'Item 2'}
                onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#E91E63'}
                icon={'bookmark-border'}
                checkedIcon={'bookmark'}
                checked={this.state.checkedThree}
                onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
            />
            <Checkbox
                indeterminate
                checkboxColor={'#F44336'}
                checked={this.state.checkedFour} 
                onPress={() => this.setState({ checkedFour: !this.state.checkedFour })}
            />
            <Checkbox
                checked={this.state.checkedFive}
                disabled
                onPress={() => this.setState({ checkedFive: !this.state.checkedFive })}
            />   
        </View>
      );
    }
  }
`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'material-bread';

class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checked: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
            />  
        </View>
      );
    }
  }
`;

const labels = `
class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedOne: true,
        checkedTwo: true,
        checkedThree: true,
        checkedFour: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Checkbox
                label={'Click me'}
                checked={this.state.checkedOne}
                onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#009688'}
                checked={this.state.checkedTwo}
                label={'Item 2'}
                labelStyle={{fontSize: 18, color:'#009688' }}
                onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#E91E63'}
                icon={'bookmark-border'}
                checkedIcon={'bookmark'}
                label={'Bookmark'}
                labelStyle={{fontSize: 14, color:'#E91E63' }}
                checked={this.state.checkedThree}
                onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
            />

            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#3F51B5'}
                label={'Left'}
                labelStyle={{fontSize: 14, color:'#3F51B5' }}
                labelPos={'left'}

                checked={this.state.checkedFour}
                onPress={() => this.setState({ checkedFour: !this.state.checkedFour })}
            />       
        </View>
      );
    }
  }`;

const icons = `class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedOne: true,
        checkedTwo: true,
        checkedThree: true,
        checkedFour: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Checkbox
                icon={'favorite-border'}
                checkedIcon={'favorite'}
                checked={this.state.checkedOne}
                onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#009688'}
                checked={this.state.checkedTwo}
                icon={<Icon name="lock-open" />}
                checkedIcon={<Icon name="lock" />}
                onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
            />
            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#E91E63'}
                icon={<Icon name="error-outline" size={30} />}
                checkedIcon={<Icon name="error" size={30} />}
                checkboxStyle={{width: 42, height: 42}}
                label={'Error'}
                labelStyle={{fontSize: 18, color:'#E91E63' }}
                checked={this.state.checkedThree}
                onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
            />

            <Checkbox
                rippleMatchesCheckbox
                checkboxColor={'#3F51B5'}
                label={'Alerts'}
                labelStyle={{fontSize: 14, color:'#3F51B5' }}
                labelPos={'left'}
                checkedIcon={'notifications'}
                icon={'notifications-none'}
                checked={this.state.checkedFour}
                onPress={() => this.setState({ checkedFour: !this.state.checkedFour })}
            />       
        </View>
      );
    }
}`;

const ios = `class CheckboxPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedOne: true,
        checkedTwo: true,
        checkedThree: true,
        checkedFour: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Checkbox
                ios
                checked={this.state.checkedOne}
                onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
            />
            <Checkbox
                ios
                rippleMatchesCheckbox
                checkboxColor={'#009688'}
                checked={this.state.checkedTwo}
                label={'Toggle'}
                onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
            />
            <Checkbox
                ios
                disabled
                checkboxColor={'#E91E63'}
                label={'Disabled'}
                checked={this.state.checkedThree}
                onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
            />    
        </View>
      );
    }
  }`;

export default class CheckboxPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'checkbox'}
          title={'Checkbox'}
          description={
            'Checkboxes allow the user to select one or more items from a set.'
          }
          docsLink={
            'https://material.io/design/components/selection-controls.html#checkboxes'
          }
          importCode={`import { Checkbox } from 'material-bread';`}
          componentDescription={
            'Checkboxes can have labels, custom icons, and custom colors.'
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ View, Checkbox }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/checkbox#demos" id="demos" />

          <Section name="Labels" href="/components/checkbox#labels" id="labels">
            <ComponentDescription text="Labels can be styled with the labelStyle prop which will override other styles. Labels can be on the left or right with labelPos. Clicking a label will activate onPress." />
            <LiveEdit code={labels} scope={{ View, Checkbox }} />
          </Section>
          <Section
            name="Custom Icon"
            href="/components/checkbox#icons"
            id="icons">
            <ComponentDescription text="Custom icons can be achieved by either passing a string or a node to Icon and checkedIcon. The component will add the approriate color and toggle them based on checked." />
            <LiveEdit code={icons} scope={{ View, Icon, Checkbox }} />
          </Section>

          <Section name="iOS" href="/components/checkbox#ios" id="ios">
            <ComponentDescription text="Platform guidelines suggest using an iOS checkbox, you can accomplish this by adding the ios prop. The unchecked state is usually blank." />
            <LiveEdit code={ios} scope={{ Checkbox, Icon, View, Text }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
