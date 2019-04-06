import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Card,CardContent, CardActions, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardContent >
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[
            {name: 'share',},
            {name: 'learn more'}
          ]}
          rightActionItems={[
            {name: 'favorite',},
            {name: 'share'} 
          ]}
        />
      </Card>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
