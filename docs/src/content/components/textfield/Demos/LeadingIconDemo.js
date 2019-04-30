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
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <Icon name={'account-circle'} size={24} color={'#6e6e6e'} />
                }
                value={this.state.one}
                onChangeText={value => this.setState({ one: value })}
            />
            <TextField
                type={'filled'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
                }
                value={this.state.two}
                onChangeText={value => this.setState({ two: value })}
            />
            <TextField
                type={'outlined'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                leadingIcon={
                    <Icon name={'album'} size={24} color={'#6e6e6e'} />
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
    sectionName={'Leading Icon'}
    sectionHref={`${pageHref}#leading-icon`}
    sectionId={'leading-icon'}
    code={code}
    scope={{ View, TextField, Icon, Text }}
  />
);
export default SubtitleDemo;
