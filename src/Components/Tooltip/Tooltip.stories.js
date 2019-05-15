import React from 'react';
import { View } from 'react-native';

import { Tooltip, Button } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Tooltip', module)
  .addParameters({ jest: ['Tooltip'] })
  .add('Tooltip', () => (
    <Container>
      <Header title={'Tooltip'} />
      <View>
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Tooltip content={"I'm a tooltip"}>
            <Button type="outlined" text={'Top'} />
          </Tooltip>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Tooltip content={"I'm a tooltip"} tooltipPosition={'bottom'}>
            <Button type="outlined" text={'Bottom'} />
          </Tooltip>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Tooltip content={"I'm a tooltip"} tooltipPosition={'right'}>
            <Button type="outlined" text={'Right'} />
          </Tooltip>
        </View>
        <View style={{ marginLeft: 100 }}>
          <Tooltip content={"I'm a tooltip"} tooltipPosition={'left'}>
            <Button type="outlined" text={'Left'} />
          </Tooltip>
        </View>
      </View>
    </Container>
  ));
