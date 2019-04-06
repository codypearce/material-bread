import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Badge, IconButton } from 'material-bread';

export default class MessageIcon extends Component {
  render() {
    return (
        <Badge size={24} content={10} position={'left'}>
            <IconButton name="message" size={40} />
        </Badge>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
