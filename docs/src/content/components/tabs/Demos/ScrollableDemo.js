import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Tabs } from '../../../../../../src/index';

export const code = `class TabsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    return (
      <Tabs
        selectedIndex={this.state.selectedTab}
        handleChange={index => this.setState({ selectedTab: index })}
        backgroundColor={'#E91E63'}
        scrollEnabled
        actionItems={[
          { icon: 'phone', label: 'Recents' },
          { icon: 'favorite', label: 'Favorites' },
          { icon: 'map', label: 'Nearby' },
          { icon: 'account-circle', label: 'Account' },
        ]}
      />
    );
  }
}`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Scrollable'}
    sectionHref={`${pageHref}#scrollable`}
    sectionId={'scrollable'}
    code={code}
    scope={{ View, Tabs }}
  />
);
export default SubtitleDemo;
