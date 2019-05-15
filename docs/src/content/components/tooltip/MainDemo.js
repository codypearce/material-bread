import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Tooltip, Button } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Tooltip content={"I'm a tooltip"}>
          <Button
            type="contained"
            text={'Hover me'}
          />
        </Tooltip>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Tooltip" type="element" />s display text above, below,
        or on either side of the element provided. On native, you can click to
        open a tooltip and click anywhere to close it.
      </div>
    }
    code={code}
    scope={{ View, Tooltip, Button, Image }}
  />
);
export default MainDemo;
