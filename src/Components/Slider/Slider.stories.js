import React from 'react';
import { View } from 'react-native';

import { Slider } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  slider: 20,
  sliderOne: 10,
  sliderTwo: 40,
});

export default storiesOf('Components|Slider', module)
  .addParameters({ jest: ['Slider'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Slider'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Slider
              value={state.slider}
              sliderLength={200}
              onValueChange={value => store.set({ slider: value })}
              valuePrefix={'test'}
            />

            <Slider
              value={state.slider}
              sliderLength={200}
              disableOne={true}
              onValueChange={value => store.set({ slider: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Ranged', () => (
    <Container>
      <Header title={'Slider'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Slider
              values={[state.sliderOne, state.sliderTwo]}
              sliderLength={280}
              onValueChange={value => store.set({ slider: value })}
              allowOverlap
            />
            <Slider
              values={[state.sliderOne, state.sliderTwo]}
              sliderLength={280}
              onValueChange={value => store.set({ slider: value })}
              min={0}
              max={100}
              step={1}
              disableOne={true}
              allowOverlap
            />
            <Slider
              values={[state.sliderOne, state.sliderTwo]}
              sliderLength={280}
              onValueChange={value => store.set({ slider: value })}
              min={0}
              max={100}
              step={1}
              disableTwo={true}
              allowOverlap
            />
            <Slider
              values={[state.sliderOne, state.sliderTwo]}
              sliderLength={280}
              onValueChange={value => store.set({ slider: value })}
              min={0}
              max={100}
              step={1}
              disableOne={true}
              disableTwo={true}
              allowOverlap
            />
          </View>
        )}
      </State>
    </Container>
  ));
