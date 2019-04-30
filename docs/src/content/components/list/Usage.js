import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'material-bread';

class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
