import React from 'react';
import { ComponentUsage, CodeInline } from '@components';

export const code = `import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-bread';

class BottomTabs extends React.Component {
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
        <BottomNavigation 
            style={{width: 672 }}
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                {icon: 'home', label: 'Home', onPress={() => this.props.navigation.navigate('Home')}},
                {icon: 'favorite', label: 'Favorite',  onPress={() => this.props.navigation.navigate('Favorites')}},
                {icon: 'info', label: 'Info',  onPress={() => this.props.navigation.navigate('Info')}},
                <BottomNavigationItem icon={'settings'} label={'Settings'}  onPress={() => this.props.navigation.navigate('Settings')}/>, 
            ]}
        />
      );
    }
  }`;

const Usage = pageHref => (
  <ComponentUsage
    pageHref={pageHref}
    description={
      <div>
        Follow the instructions on your navigation package of choice for setting
        up bottom tabs with a custom component. Otherwise you can add{' '}
        <CodeInline code="onPress" type="prop" /> props to each tab to call your
        navigate function.
      </div>
    }
    code={code}
  />
);
export default Usage;
