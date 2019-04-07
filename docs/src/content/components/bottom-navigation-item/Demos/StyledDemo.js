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
            style={{  maxWidth: 672, width: '100%' }}
            showLabels
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            backgroundColor={'transparent'}
            actionItems={[
              <BottomNavigationItem
                  icon={'home'}
                  label={'Home'} 
                  style={{backgroundColor: '#3F51B5'}}
              />,
              <BottomNavigationItem
                  icon={'favorite'}
                  label={'Favorite'}
                  style={{backgroundColor: '#009688'}}
              />,
              <BottomNavigationItem
                  icon={'info'}
                  label={'Info'}
                  style={{backgroundColor: '#2196F3'}}
              />,
              <BottomNavigationItem
                  icon={'settings'}
                  label={'Settings'}
                  style={{backgroundColor: '#F44336'}}
              />, 
            ]}
        />
      </View>
    );
  }
}
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Styled'}
    sectionHref={`${pageHref}#styled`}
    sectionId={'styled'}
    code={code}
    scope={{ View, BottomNavigationItem, BottomNavigation }}
  />
);
export default IconDemo;
