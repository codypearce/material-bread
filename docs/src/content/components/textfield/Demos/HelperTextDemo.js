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
                helperText={'Some helper text here'}
            />
            <TextField
                type={'filled'}
                label={'Enter Code'}
                value={this.state.two}
                onChangeText={value => this.setState({ two: value })}
                helperText={'5 digits are required'}
            />
            <TextField
                type={'outlined'}
                label={'Hours'}
                value={this.state.three}
                onChangeText={value => this.setState({ three: value })}
                helperText={'Between 1-24'}
            />
        </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'HelperText '}
    sectionHref={`${pageHref}#helper-text`}
    sectionId={'helper-text'}
    code={code}
    scope={{ View, TextField, Icon, Text }}
  />
);
export default SubtitleDemo;
