import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { TextField, IconButton } from '../../../../../../src/index';

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
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <IconButton name={'person'} size={24} color={'#6e6e6e'} />
                }
                trailingIcon={
                    <IconButton name={'clear'} size={24} color={'#6e6e6e'} />
                }
                value={this.state.one}
                onChangeText={value => this.setState({ one: value })}
            />
            <TextField
                type={'filled'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <IconButton name={'date-range'} size={24} color={'#6e6e6e'} />
                }
                trailingIcon={
                    <IconButton name={'mic'} size={24} color={'#6e6e6e'} />
                }
                value={this.state.two}
                onChangeText={value => this.setState({ two: value })}
            />
            <TextField
                type={'outlined'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <IconButton name={'mic'} size={24} color={'#6e6e6e'} />
                }
                trailingIcon={
                    <IconButton name={'album'} size={24} color={'#6e6e6e'} />
                }
                value={this.state.three}
                onChangeText={value => this.setState({ three: value })}
            />
        </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Trailing Icon'}
    sectionHref={`${pageHref}#trailing-icon`}
    sectionId={'trailing-icon'}
    code={code}
    scope={{ View, TextField, IconButton, Text }}
  />
);
export default SubtitleDemo;
