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
        backgroundColor={'#009688'}
        actionItems={[
          { icon: 'access-time' },
          { icon: 'shopping-cart' },
          { icon: 'shop' },
        ]}
      />
    );
  }
}`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icons'}
    sectionHref={`${pageHref}#icons`}
    sectionId={'icons'}
    code={code}
    scope={{ View, Tabs }}
  />
);
export default IconDemo;
