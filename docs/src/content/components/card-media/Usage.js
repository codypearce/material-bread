import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Card, CardContent, CardMedia } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
            title={'Top ten books'}
            subtitle={'by Cody'}
            image={
                <Image
                    style={{ flex: 1, width: '100%' }}
                    source={{uri: 'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}  
                    resizeMode="cover"
                />
            }
        />
        <CardContent >
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
      </Card>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
