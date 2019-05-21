import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Avatar, Banner, Button } from '../../../../../src/index';

export const code = `class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
 
  render() {
    return (
      <View>
        <Banner
          visible={this.state.visible}
          actionItems={[
            {name: 'Continue'},
            {name: 'Sign in', onPress: () => console.log('sign in')}
          ]}
          media={
            <Avatar
              type="icon"
              content="notifications"
              size={40}
              contentColor={'white'}
              color={'#42a5f5'}
            />
          }
          message={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        />
        <Button text={'Toggle'} type={'contained'} onPress={() => this.setState({visible: !this.state.visible})} containerStyle={{marginTop: 16}} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Banner" type="element" />s show important information
        at the top of a page, you can add an{' '}
        <CodeInline code="icon" type="value" /> or other{' '}
        <CodeInline code="media" type="props" />, text, and
        <CodeInline code="actionItems" type="prop" />. A simple web multiline
        example is shown below.
      </div>
    }
    code={code}
    scope={{ View, Banner, Avatar, Button }}
  />
);
export default MainDemo;
