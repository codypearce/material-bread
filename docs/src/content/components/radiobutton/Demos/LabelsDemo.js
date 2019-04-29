import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { RadioButton } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: 1,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'column',  flexWrap: 'wrap'}}>
        <RadioButton
          checked={this.state.checked == 1}
          onPress={() => this.setState({ checked: 1 })}
          label="Home"
        />
        <RadioButton
          checked={this.state.checked == 2}
          onPress={() => this.setState({ checked: 2 })}
          label="Work"
        />
        <RadioButton
          checked={this.state.checked == 3}
          onPress={() => this.setState({ checked: 3 })}
          label="Anywhere"
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
    scope={{ View, RadioButton }}
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
