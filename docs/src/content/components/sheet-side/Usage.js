import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { SheetSide, Button, List, ListItem, Icon  } from 'material-bread';

class SelectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
