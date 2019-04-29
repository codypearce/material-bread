import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { ToggleButton, Icon } from '../../../../../../src/index';

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
        <View style={{ flexDirection: 'row' }}>
            <ToggleButton
            activeNode={
                <View style={styles.active}>
                    <Icon name="format-italic" size={20} />
                </View>
            }
            inActiveNode={
                <View style={styles.inactive}>
                    <Icon name="format-italic" size={20} />
                </View>
            }
            rippleContainerBorderRadius={0}
            />
            <ToggleButton
            activeNode={
                <View style={[styles.active, {
                    borderRightWidth: 0,
                    borderLeftWidth: 0,                      
                }]}>
                    <Icon name="format-bold" size={20} />
                </View>
            }
            inActiveNode={
                <View style={[styles.inactive, {
                        borderRightWidth: 0,
                        borderLeftWidth: 0,                      
                    }]}>
                    <Icon name="format-bold" size={20} />
                </View>
            }
            rippleContainerBorderRadius={0}
            />
            <ToggleButton
                activeNode={
                    <View style={styles.active}>
                        <Icon name="format-underlined" size={20} />
                    </View>
                }
                inActiveNode={
                    <View style={styles.inactive}>
                        <Icon name="format-underlined" size={20} />
                    </View>
                }
                rippleContainerBorderRadius={0}
            />
        </View>
      );
    }
  }
`;

const PushDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    code={code}
    scope={{
      View,
      ToggleButton,
      Icon,
    }}
  />
);
export default PushDemo;
