import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Switch, BodyText, Button } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedOne: true,
        checkedTwo: true,
        checkedThree: true,
        isLoading: true
      }
    }
    render() {
      return (
        <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12}}>
                <Switch
                onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
                checked={this.state.checkedOne}
                style={{ marginRight: 8 }}
                loading={this.state.isLoading}
                />
                <Switch
                color={'#E91E63'}
                onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
                checked={this.state.checkedTwo}
                style={{ marginRight: 8 }}
                loading={this.state.isLoading}
                />
                <Switch
                color={'#009688'}
                onPress={() => this.setState({ checkedThree: !this.state.checkedThree })}
                checked={this.state.checkedThree}
                label={<BodyText text={'$'} />}
                labelPos={'left'}
                loading={this.state.isLoading}
                />
            </View>
            <Button
              text={'Toggle Loading'}
              type="outlined"
              onPress={() => this.setState({ isLoading: !this.state.isLoading })}
            />
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Loader'}
    sectionHref={`${pageHref}#loader`}
    sectionId={'loader'}
    code={code}
    scope={{ View, Switch, BodyText, Text, Button }}
  />
);
export default SubtitleDemo;
