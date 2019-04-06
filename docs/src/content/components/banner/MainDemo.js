import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
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
      'Banners show important information at the top of a page, you can add an icon or other media, text, and action buttons. A simple web multiline example is shown below.'
    }
    code={code}
    scope={{ View, Banner, Avatar, Button }}
  />
);
export default MainDemo;
