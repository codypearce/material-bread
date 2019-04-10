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

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Labels'}
    sectionHref={`${pageHref}#labels`}
    sectionId={'labels'}
    code={code}
    livePreviewBackground={'#f7f7f7'}
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default IconDemo;
