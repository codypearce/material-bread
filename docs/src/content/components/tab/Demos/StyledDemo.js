import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Tabs, Tab } from '../../../../../../src/index';

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
        actionItems={[
          <Tab key={1} icon="phone" label="Recents" style={{ backgroundColor: '#9C27B0' }} />,
          <Tab key={2} icon="favorite" label="Favorites" style={{ backgroundColor: '#009688' }} />,
          <Tab key={3} icon="map" label="Nearby" />,
          <Tab key={4} icon="account-circle" label="Account" style={{ backgroundColor: '#E91E63' }} />,
        ]}
      />
    );
  }
}`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Styled'}
    sectionHref={`${pageHref}#styled`}
    sectionId={'styled'}
    code={code}
    scope={{ View, Tabs, Tab }}
  />
);
export default IconDemo;
