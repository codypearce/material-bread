import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
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
              style={{maxWidth: 672, width: '100%' }}
              value={this.state.value}
              horizontalWhenLandscape
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
    sectionName={'Landscape'}
    sectionHref={`${pageHref}#landscape`}
    sectionId={'landscape'}
    code={code}
    description={
      <div>
        By default items should keep their width and have the same widths on
        larger width screens. If the{' '}
        <CodeInline code="horizontalWhenLandscape" type="prop" /> prop is added,
        the labels and icons will be laid out horizontally and take up the full
        width of the bar both per Material Design. Check the Storybook demos for
        examples of both.
      </div>
    }
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default IconDemo;
