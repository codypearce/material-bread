import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Drawer, DrawerItem, DrawerHeader, DrawerSection, Appbar, Heading, BodyText } from 'material-bread';

const DrawerContent = () => {
  return (
    <View>
      <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
      <DrawerSection bottomDivider>
        <DrawerItem text={'Inbox'} icon={'mail'} active />
        <DrawerItem text={'Outbox'} icon={'send'} />
        <DrawerItem text={'Favorites'} icon={'favorite'} />
      </DrawerSection>
    </View>
  );
};

const PageContent = () => {
  return (
    <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>
      <Heading type={4} style={{ marginBottom: 20 }}>
        This is a page
      </Heading>
      <BodyText text={'Click the menu button to open the drawer'} />
      <BodyText text={'Click outside the drawer to close it'} />
    </View>
  );
};

const AppbarContent = isOpen => {
  return (
    <Appbar
      barType={'normal'}
      title={'Page Title'}
      navigation={'menu'}
      onNavigation={() => this.setState({ isOpen: !this.state.isOpen })}
      actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
    />
  );
};

const styles = {
  container: {
    width: '100%',
  },
  body: {
    backgroundColor: '#eee',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Drawer
          open={this.state.isOpen}
          drawerContent={<DrawerContent />}
          onClose={() => this.setState({ isOpen: false })}
          animationTime={250}>
          <View style={styles.body}>
            <AppbarContent />
            <PageContent />
          </View>
        </Drawer>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
