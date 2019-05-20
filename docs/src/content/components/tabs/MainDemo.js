import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Tabs } from '../../../../../src/index';

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
          { icon: 'phone', label: 'Recents' },
          { icon: 'favorite', label: 'Favorites' },
          { icon: 'map', label: 'Nearby' },
          { icon: 'account-circle', label: 'Account' },
        ]}
      />
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        The <CodeInline code="Tabs" type="element" /> component provides a
        wrapper around the <CodeInline code="Tab" type="element" />s component
        to handle the index and <CodeInline code="Underline" type="element" />.
        You can further customize <CodeInline code="actionItems" type="prop" />{' '}
        by passing in the <CodeInline code="Tab" type="element" /> component
        directly.
      </div>
    }
    code={code}
    scope={{ View, Tabs }}
  />
);
export default MainDemo;
