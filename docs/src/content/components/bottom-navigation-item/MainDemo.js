import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
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
            style={{width: 672 }}
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
    description={`Passing in an object means you don't have to worry about the internal logic, however passing in the component directly gives you more granular control. Below is example utitilizing some useful props to control the component more directly.`}
    code={code}
    scope={{ View, BottomNavigationItem, BottomNavigation, Badge }}
  />
);
export default MainDemo;
