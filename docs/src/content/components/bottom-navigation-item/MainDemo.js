import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  BottomNavigation,
  BottomNavigationItem,
  Badge,
} from '../../../../../src/index';

export const code = `class BottomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Home'
    }
  }

  handleChange(value) {
      this.setState({value});
  }
 
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <BottomNavigation 
            style={{ maxWidth: 672, width: '100%' }}
            actionItems={[
                <BottomNavigationItem 
                    icon={'home'} 
                    value={'Home'} 
                    active={this.state.value === 'Home'} 
                    handleChange={(value) => this.handleChange(value)}

                />,
                <BottomNavigationItem 
                    icon={'favorite'} 
                    value={'Favorite'} 
                    active={this.state.value === 'Favorite'} 
                    handleChange={(value) => this.handleChange(value)}
                />,
                <BottomNavigationItem 
                    icon={'info'} 
                    value={'Info'} 
                    active={this.state.value === 'Info'} 
                    handleChange={(value) => this.handleChange(value)}
                    label={'Info'}
                />,
                <BottomNavigationItem 
                    icon={'settings'} 
                    value={'Settings'} 
                    active={this.state.value === 'Settings'} 
                    handleChange={(value) => this.handleChange(value)}
                    showLabel
                    label={'Settings'}
                />, 
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
        You can have only <CodeInline code="icon" type="value" />s or{' '}
        <CodeInline code="label" type="value" />
        s, or both together. You can also mix and match components and objects
        in the array.
      </div>
    }
    code={code}
    scope={{ View, BottomNavigationItem, BottomNavigation, Badge }}
  />
);
export default MainDemo;
