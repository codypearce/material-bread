import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  BottomNavigation,
  BottomNavigationItem,
} from '../../../../../src/index';

export const code = `class BottomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange(value) {
      this.setState({value});
  }
 
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <BottomNavigation 
            style={{maxWidth: 672, width: '100%' }}
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                {icon: 'home', label: 'Home'},
                {icon: 'favorite', label: 'Favorite'},
                {icon: 'info', label: 'Info'},
                <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
            ]}
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
        You can pass items either to the{' '}
        <CodeInline code="actionItem" type="prop" />
        's prop, or as <CodeInline code="children" type="prop" /> for more
        customization. If you pass both, the{' '}
        <CodeInline code="children" type="prop" /> elements will overwrite the{' '}
        <CodeInline code="actionItem" type="prop" /> elements. The active item
        is handled by passing in the <CodeInline code="index" type="value" /> of
        that item to{' '}
        <CodeInline
          code="Bottom
              Navigation"
          type="element"
        />{' '}
        and adding a <CodeInline code="handleChange" type="prop" /> method.{' '}
        {`A simple example is shown below, more customization
              options can be seen in the demo's section.`}
      </div>
    }
    code={code}
    livePreviewBackground={'#f7f7f7'}
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default MainDemo;
