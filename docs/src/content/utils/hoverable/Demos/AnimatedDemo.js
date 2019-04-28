import React from 'react';
import { View, Animated } from 'react-native';
import { ComponentDemo } from '@components';
import { Hoverable } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rotate: new Animated.Value(0)
      }
    }

    toggleAnimation(state) {
      const value = state ? 1 : 0;
      Animated.timing(this.state.rotate, {
        toValue: value,
        duration: 500,
      }).start();
    }
  
  
    render() {
      return (
        <Hoverable
          onHoverIn={() => this.toggleAnimation(true)}
          onHoverOut={() => this.toggleAnimation(false)}
          >
          <Animated.View
            style={{
              width: 125,
              height: 125,
              backgroundColor: '#E91E63',
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          />
        </Hoverable>
      );
    }
  }`;

const AnimatedDemo = pageHref => (
  <ComponentDemo
    sectionName={'Animated'}
    sectionHref={'/components/hoverable#animated'}
    sectionId={'animated'}
    pageHref={pageHref}
    code={code}
    scope={{ View, Hoverable, Animated }}
  />
);
export default AnimatedDemo;
