import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Tabs } from 'material-bread';

class TabsPage extends React.Component {
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
