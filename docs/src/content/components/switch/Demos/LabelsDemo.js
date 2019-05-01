import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Switch, BodyText } from '../../../../../../src/index';

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
              label={<BodyText text={'$'} />}
            />
            <Switch
              color={'#E91E63'}
              onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
              checked={this.state.checkedTwo}
              style={{ marginRight: 8 }}
              label={<BodyText style={{color: '#E91E63'}}>Label</BodyText>}
            />
            <Switch
              color={'#009688'}
              onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
              checked={this.state.checkedThree}
              label={<BodyText text={'$'} />}
              labelPos={'left'}
              style={{ marginLeft: 16 }}
            />
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Labels'}
    sectionHref={`${pageHref}#labels`}
    sectionId={'labels'}
    code={code}
    scope={{ View, Switch, BodyText, Text }}
  />
);
export default SubtitleDemo;
