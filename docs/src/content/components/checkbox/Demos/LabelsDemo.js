import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
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
}
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Labels'}
    sectionHref={`${pageHref}#labels`}
    sectionId={'labels'}
    code={code}
    scope={{ View, Checkbox }}
    descriptions={
      <div>
        Labels can be styled with the{' '}
        <CodeInline code="labelStyle" type="prop" /> prop which will override
        other styles. Labels can be on the{' '}
        <CodeInline code="left" type="value" /> or{' '}
        <CodeInline code="right" type="value" /> with{' '}
        <CodeInline code="labelPos" type="prop" />. Clicking a label will
        activate <CodeInline code="onPress" type="prop" /> if provided.
      </div>
    }
  />
);
export default IconDemo;
