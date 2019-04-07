import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Checkbox, Icon } from '../../../../../../src/index';

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
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom Icon'}
    sectionHref={`${pageHref}#icons`}
    sectionId={'icons'}
    description={
      <div>
        Custom icons can be achieved by either passing a string or a node to{' '}
        <CodeInline code="Icon" type="element" /> and{' '}
        <CodeInline code="checkedIcon" type="prop" />. The component will add
        the approriate color and toggle them based on
        <CodeInline code="checked" type="prop" />.
      </div>
    }
    code={code}
    scope={{ View, Checkbox, Icon }}
  />
);
export default SubtitleDemo;
