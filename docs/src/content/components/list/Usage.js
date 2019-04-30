import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, ListExpanded,} from 'material-bread';

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
   
        </ListItem>
        <ListExpanded title="Expanded">
          <ListItem>

          </ListItem>
          <ListItem>

          </ListItem>
        </ListExpanded>
      </List>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
