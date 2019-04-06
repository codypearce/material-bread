import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Card, CardMedia, CardContent, CardActions, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{uri: 'https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800'}}
              resizeMode="cover"
            />
          }
        />
        <CardContent>
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[
            {name: 'share',},
            {name: 'learn more'}
          ]}
        />
    </Card>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
