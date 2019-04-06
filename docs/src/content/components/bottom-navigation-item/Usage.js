import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-bread';

class BottomTabs extends Component {
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
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                <BottomNavigationItem icon={'home'} label={'Home'} />,
                <BottomNavigationItem icon={'favorite'} label={'Favorite'} />,
                <BottomNavigationItem icon={'info'} label={'Info'} />,
                <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
            ]}
        />
      );
    }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
