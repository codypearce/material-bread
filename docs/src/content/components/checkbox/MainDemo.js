import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Checkbox } from '../../../../../src/index';

export const code = `class CheckboxPage extends React.Component {
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
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        The <CodeInline code="Checkbox" type="element" /> component can have
        labels, custom icons, and custom colors.
      </div>
    }
    code={code}
    scope={{ View, Checkbox, Image }}
  />
);
export default MainDemo;
