import React from 'react';
import { ComponentUsage, CodeInline } from '@components';

export const code = `import React, { Component } from 'react';
import { Banner, Button } from 'material-bread';

class Header extends React.Component {
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
          position={'relative'}
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
        <Button text={'Toggle'} type={'outlined'} onPress={() => this.setState({visible: !this.state.visible})} containerStyle={{marginTop: 16}} />
      </View>
    );
  }
}`;

const Usage = pageHref => (
  <ComponentUsage
    pageHref={pageHref}
    description={
      <div>
        Banners are meant to be dissmissed. Changing the{' '}
        <CodeInline code="visible" type="prop" /> prop will trigger the
        animation to show and hide the banner. Additionally, each{' '}
        <CodeInline code="actionItem" type="prop" />
        will dismiss the banner, but you can trigger this manually by changing
        the <CodeInline code="visible" type="prop" /> prop. Usually banners are
        shown right below the appbar and can be fixed or scrollable. You can
        toggle this with the <CodeInline code="position" type="prop" /> prop.
      </div>
    }
    code={code}
  />
);
export default Usage;
