import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, ListSection, Icon } from 'material-bread';

class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ width: 300 }}>
        <ListSection label={'Entertainment'}>
          <ListItem
            text={'Attractions'}
            icon={<Icon name={'local-movies'} size={24} />}
          />
          <ListItem
            text={'Dining'}
            icon={<Icon name={'local-dining'} size={24} />}
          />
        </ListSection>
      </List>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
