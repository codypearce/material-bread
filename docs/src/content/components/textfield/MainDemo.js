import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { TextField } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      one: '',
      two: '',
      three: ''
    }
  }
  render() {
    return (
     <View>
        <TextField
          label={'Label'}
          value={this.state.one}
          onChangeText={value => this.setState({ one: value })}
        />
        <TextField
          containerStyle={{ marginTop: 20 }}
          type={'outlined'}
          label={'Label'}
          value={this.state.two}
          onChangeText={value => this.setState({ two: value })}
        />
        <TextField
          containerStyle={{ marginTop: 20 }}
          type={'filled'}
          label={'Label'}
          value={this.state.three}
          onChangeText={value => this.setState({ three: value })}
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
        <CodeInline code="TextField" type={'element'} /> components can either
        be <CodeInline code="flat" type={'value'} />,{' '}
        <CodeInline code="filled" type={'value'} />, or{' '}
        <CodeInline code="outlined" type={'value'} />. You can also pass any
        native <CodeInline code="TextInput" type={'element'} /> props and it
        will be applied to the native element.
      </div>
    }
    code={code}
    scope={{ View, TextField, Image }}
  />
);
export default MainDemo;
