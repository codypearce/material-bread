import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  ToggleButton,
  ToggleButtonGroup,
  Icon,
} from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const styles = {
      active: {
        backgroundColor: 'rgba(0,0,0,.12)',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.12)',
        padding: 8,
      },
      inactive: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.12)',
        padding: 8,
      }
    }
    return (
      <ToggleButtonGroup onPress={value => console.log(value)}>
        <View style={{ flexDirection: 'row' }}>
          <ToggleButton
            value={'italic'}
            activeNode={
              <View style={styles.active}>
                <Icon name="format-align-center" size={20} />
              </View>
            }
            inActiveNode={
              <View style={styles.inactive}>
                <Icon name="format-align-center" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
          <ToggleButton
            value={'bold'}
            activeNode={
              <View style={[styles.active, {
                borderRightWidth: 0,
                borderLeftWidth: 0,                      
                }]}>
                <Icon name="format-align-left" size={20} />
              </View>
            }
            inActiveNode={
              <View style={[styles.inactive, {
                borderRightWidth: 0,
                borderLeftWidth: 0,                      
                }]}>
                <Icon name="format-align-left" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
          <ToggleButton
            value={'underlined'}
            activeNode={
              <View style={styles.active}>
                <Icon name="format-align-right" size={20} />
              </View>
            }
            inActiveNode={
              <View style={styles.inactive}>
                <Icon name="format-align-right" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
        </View>
      </ToggleButtonGroup>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    code={code}
    description={
      <div>
        <CodeInline code="ToggleButtonGroup" type="element" /> wraps all{' '}
        <CodeInline code="ToggleButton" type="element" />
        s, and only allows one to be selected at a time, it handles all of this
        behind the scenes. A unique <CodeInline code="value" type="prop" /> prop
        is required for each child since that will be passed to to the{' '}
        <CodeInline code="onPress" type="prop" /> callback.
      </div>
    }
    scope={{ View, ToggleButton, ToggleButtonGroup, Icon, Image }}
  />
);
export default MainDemo;
