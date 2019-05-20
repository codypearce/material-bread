import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Tabs, Tab } from '../../../../../src/index';

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
        actionItems={[
          <Tab key={1} icon="favorite" label="Favorites" />,
          <Tab key={2} icon="music-note" label="Music" />,
          <Tab key={3} icon="tv" label="Movie" />,
          <Tab key={4} icon="camera" label="Photo" />,
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
        Using <CodeInline code="Tab" type="element" /> component directly allows
        you to customize the <CodeInline code="activeTextColor" type="prop" />,{' '}
        <CodeInline code="inActiveTextColor" type="prop" />,{' '}
        <CodeInline code="rippleProps" type="prop" />,{' '}
        <CodeInline code="textStyles" type="prop" />,{' '}
        <CodeInline code="iconStyles" type="prop" />, and more.
      </div>
    }
    code={code}
    scope={{ View, Tabs, Tab }}
  />
);
export default MainDemo;
