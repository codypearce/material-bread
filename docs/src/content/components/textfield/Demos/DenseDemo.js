import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { TextField, Icon } from '../../../../../../src/index';

export const code = `class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        one: '',
        two: '',
        three: ''
    }
  }
  render() {
    return (
        <View >      
            <TextField
                type={'flat'}
                label={'Label'}
                value={this.state.one}
                onChangeText={value => this.setState({ one: value })}
                dense
            />
            <TextField
                type={'filled'}
                value={this.state.two}
                onChangeText={value => this.setState({ two: value })}
                dense
                containerStyle={{marginVertical: 8}}
            />
            <TextField
                type={'outlined'}
                label={'Hours'}
                value={this.state.three}
                onChangeText={value => this.setState({ three: value })}
                dense
            />
        </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Dense '}
    sectionHref={`${pageHref}#dense`}
    sectionId={'dense'}
    code={code}
    scope={{ View, TextField, Icon, Text }}
  />
);
export default SubtitleDemo;
