import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import {
  BottomNavigation,
  BottomNavigationItem,
} from '../../../../../../src/index';

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
            style={{ maxWidth: 672, width: '100%' }}
            showLabels
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                {icon: 'home' },
                {icon: 'attach-money'},
                {icon: 'favorite'},
                {icon: 'info'},
                <BottomNavigationItem icon={'settings'} />, 
            ]}
        />
      </View>
    );
  }
}`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icons'}
    sectionHref={`${pageHref}#icons`}
    sectionId={'icons'}
    code={code}
    livePreviewBackground={'#f7f7f7'}
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default IconDemo;
