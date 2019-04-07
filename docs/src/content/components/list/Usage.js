import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, ListItemIcon, ListItemText, ListExpanded,} from 'material-bread';

class ListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon icon={'alarm'} />
          <ListItemText primary={'This is a list Item'} />
        </ListItem>
        <ListExpanded title="Expanded">
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
        </ListExpanded>
      </List>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
