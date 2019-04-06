import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Card, CardContent, CardHeader, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
            thumbnail={
                <Avatar 
                    type="icon" 
                    content="person"
                    color={'white'}
                    size={40}
                />
            }
            title={'Title'}
            subtitle={'Subtitle'}
            action={<IconButton name="more-vert" size={24} />}
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
