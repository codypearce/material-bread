import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { SheetSide, Button, List, ListItem, Icon } from '../../../../../src/';

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
        <SheetSide
          visible={this.state.visible}
          onBackdropPress={() => this.setState({ visible: false })}
          onSwipeRight={() => this.setState({ visible: false })}>
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
            <ListItem
              text={'Office'}
              icon={<Icon name={'content-cut'} size={24} />}
            />
            <ListItem
              text={'Promotions'}
              icon={<Icon name={'loyalty'} size={24} />}
            />
          </List>
        </SheetSide>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="SheetSide" type="element" /> animates from the left or
        right of the screen to show whatever you want. You can manually control
        swipe left and right on the sheet by using{' '}
        <CodeInline code="onSwipeRight" type="element" /> and{' '}
        <CodeInline code="onSwipeLeft" type="element" />.
      </div>
    }
    code={code}
    scope={{ View, SheetSide, Button, List, ListItem, Icon, Image }}
  />
);
export default MainDemo;
