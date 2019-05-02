import React from 'react';
import { View } from 'react-native';
import { CodeInline, ComponentDemo } from '@components';
import { Checkbox } from '../../../../../../src/index';

export const code = `class CheckboxPage extends React.Component {
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
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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
          <Checkbox
              ios
              error
              checkboxColor={'#E91E63'}
              label={'Error'}
              checked={this.state.checkedFour}
              onPress={() => this.setState({ checkedFour: !this.state.checkedFour })}
          />    
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'iOS'}
    sectionHref={`${pageHref}#ios`}
    sectionId={'ios'}
    description={
      <div>
        Platform guidelines suggest using an iOS checkbox, you can accomplish
        this by adding the <CodeInline code="ios" type="prop" /> prop. The
        unchecked state is usually blank.
      </div>
    }
    code={code}
    scope={{ View, Checkbox }}
  />
);
export default SubtitleDemo;
