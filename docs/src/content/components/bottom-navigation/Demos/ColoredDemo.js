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
            style={{ maxWidth: 672, width: '100%' }}
            value={this.state.value}
            backgroundColor={'#673AB7'}
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
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Colored Background'}
    sectionHref={`${pageHref}#colored`}
    sectionId={'colored'}
    description={
      <div>
        Changing the <CodeInline code="backgroundColor" type="prop" /> will
        change the icons to display as <CodeInline code="white" type="value" />.
      </div>
    }
    code={code}
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default SubtitleDemo;
