import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Switch } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedOne: false,
      checkedTwo: true,
      checkedThree: true
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Switch
            onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
            checked={this.state.checkedOne}
            style={{ marginRight: 8 }}
          />
          <Switch
            color={'#E91E63'}
            onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
            checked={this.state.checkedTwo}
            style={{ marginRight: 8 }}
          />
          <Switch
            color={'#009688'}
            onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
            checked={this.state.checkedThree}
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
        The <CodeInline code="Switch" type="element" /> track and knob can be
        customized by passing in <CodeInline code="trackStyle" type="prop" /> or{' '}
        <CodeInline code="thumbStyle" type="prop" />.
      </div>
    }
    code={code}
    scope={{ View, Switch, Image }}
  />
);
export default MainDemo;
