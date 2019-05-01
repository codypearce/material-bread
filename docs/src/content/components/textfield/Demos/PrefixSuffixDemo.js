import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { TextField, Caption, BodyText } from '../../../../../../src/index';

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
                prefix={<BodyText text={'$'} />}
                suffix={<Caption text="lbs" />}
                value={this.state.one}
                onChangeText={value => this.setState({ one: value })}
            />
            <TextField
                type={'filled'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                prefix={<BodyText text={'$'} />}
                suffix={<Caption text="lbs" />}
                value={this.state.two}
                onChangeText={value => this.setState({ two: value })}
            />
            <TextField
                type={'outlined'}
                containerStyle={{ marginTop: 20 }}
                label={'Icon'}
                prefix={<BodyText text={'$'} />}
                suffix={<Caption text="lbs" />}
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
    sectionName={'Prefix and Suffix'}
    sectionHref={`${pageHref}#prefix-suffix`}
    sectionId={'prefix-suffix'}
    code={code}
    scope={{ View, TextField, Caption, BodyText, Text }}
  />
);
export default SubtitleDemo;
