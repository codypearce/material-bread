import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { SheetBottom, Button, List, ListItem, Icon } from '../../../../../src/';

export const code = `class MainDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false,
    }
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <Button
          text="Open Sheet"
          onPress={() => {
            this.setState({ visible: true });
          }}
        />
        <SheetBottom
          visible={this.state.visible}
          onBackdropPress={() => this.setState({ visible: false })}
          onSwipeDown={() => this.setState({ visible: false })}>
          <List>
            <ListItem
              text={'Attractions'}
              icon={<Icon name={'local-movies'} size={24} />}
            />
            <ListItem
              text={'Dining'}
              icon={<Icon name={'local-dining'} size={24} />}
            />
            <ListItem
              text={'Education'}
              icon={<Icon name={'edit'} size={24} />}
            />
            <ListItem
              text={'Health'}
              icon={<Icon name={'favorite'} size={24} />}
            />
            <ListItem
              text={'Family'}
              icon={<Icon name={'group'} size={24} />}
            />
          
          </List>
        </SheetBottom>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="SheetBottom" type="element" /> animates from the
        bottom of the screen to show more items. You can manually control swipe
        up and down by using <CodeInline code="onSwipeUp" type="element" /> and{' '}
        <CodeInline code="onSwipeDown" type="element" />.
      </div>
    }
    code={code}
    scope={{ View, SheetBottom, Button, List, ListItem, Icon, Image }}
  />
);
export default MainDemo;
