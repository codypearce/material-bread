import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { ToggleButton, Icon } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <ToggleButton
          activeNode={<Icon name="alarm" size={32} />}
          inActiveNode={
            <Icon name="alarm" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="face" size={32} color={'purple'} />}
          inActiveNode={
            <Icon
              name="face"
              size={32}
              style={{ opacity: 0.5 }}
              color={'purple'}
            />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="favorite" size={32} />}
          inActiveNode={<Icon name="favorite-border" size={32} />}
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="label" size={32} color={'orange'} />}
          inActiveNode={
            <Icon
              name="label-outline"
              size={32}
              style={{ opacity: 0.5 }}
              color={'orange'}
            />
          }
          size={32}
        />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    code={code}
    description={
      <div>
        Pass arbitrary components to{' '}
        <CodeInline code="activeNode" type="prop" /> and{' '}
        <CodeInline code="inActiveNode" type="prop" /> and the component will
        switch when clicked. A common use case is simple opacity shown below,
        however these can be any.
      </div>
    }
    scope={{ View, ToggleButton, Icon, Image }}
  />
);
export default MainDemo;
