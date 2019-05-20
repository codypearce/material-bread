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
        backgroundColor={'#9C27B0'}
        actionItems={[
          { label: 'Dogs' },
          { label: 'Cats' },
          { label: 'Birds' },
        ]}
      />
    );
  }
}`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Labels'}
    sectionHref={`${pageHref}#labels`}
    sectionId={'labels'}
    code={code}
    scope={{ View, Tabs }}
  />
);
export default IconDemo;
