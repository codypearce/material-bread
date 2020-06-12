import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon, BodyText } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

export default storiesOf('Components|Buttons/Outlined Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Simple Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Text'} type="outlined" />
        <Button text={'Button'} textColor={'#E91E63'} type="outlined" />
        <Button text={'Buy'} textColor={'#FF5722'} type="outlined" />
        <Button text={'Click Here'} textColor={'#673AB7'} type="outlined" />
        <Button text={'Do not click'} textColor={'#009688'} type="outlined" />
      </View>
    </Container>
  ))
  .add('with left icon', () => (
    <Container>
      <Header title={'Left Icon Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} icon={<Icon name="home" />} type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          textColor={'#FF5722'}
          radius={20}
          type="outlined"
        />
        <Button
          text={'Buy'}
          textColor={'#673AB7'}
          density={-2}
          icon={<Icon name="attach-money" />}
          type="outlined"
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>
    </Container>
  ))
  .add('with right icon', () => (
    <Container>
      <Header title={'Right Icon Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button
          text={'Home'}
          icon={<Icon name="home" />}
          type="outlined"
          iconPosition={'right'}
        />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          type="outlined"
          icon={<Icon name="favorite" />}
          iconPosition={'right'}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          textColor={'#FF5722'}
          radius={20}
          type="outlined"
          iconPosition={'right'}
        />
        <Button
          text={'Buy'}
          textColor={'#673AB7'}
          dense
          icon={<Icon name="attach-money" />}
          type="outlined"
          iconPosition={'right'}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          icon={<Icon name="archive" />}
          type="outlined"
          iconPosition={'right'}
        />
      </View>
    </Container>
  ))
  .add('radius', () => (
    <Container>
      <Header title={'Radius Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} radius={20} type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          radius={40}
          icon={<Icon name="favorite" />}
          type="outlined"
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          icon={<Icon name="attach-money" />}
          type="outlined"
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          radius={0}
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>
    </Container>
  ))
  .add('density', () => (
    <Container>
      <Header title={'Dense Outlined Button'} />

      <BodyText text={'Density -1: 32px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-1} type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-1}
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-1}
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-1}
          radius={0}
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-1}
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>

      <BodyText text={'Density -2: 28px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-2} type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-2}
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-2}
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-2}
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>

      <BodyText text={'Density -3: 24px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-3} type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-3}
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-3}
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-3}
          radius={0}
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-3}
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Loading Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button loading type="outlined" />
        <Button textColor={'#E91E63'} borderSize={2} loading type="outlined" />
        <Button textColor={'#FF5722'} loading radius={60} type="outlined" />
        <Button
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          loading
          type="outlined"
        />
        <Button textColor={'#009688'} loading type="outlined" />
      </View>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Disabled Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} disabled type="outlined" />
        <Button
          textColor={'#E91E63'}
          borderSize={2}
          loading
          disabled
          type="outlined"
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          type="outlined"
          disabled
          radius={60}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          disabled
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          disabled
          type="outlined"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('full width', () => (
    <Container>
      <Header title={'Full Width Outlined Button'} />
      <Button
        fullWidth
        text={'Outlined'}
        type="outlined"
        style={{ marginBottom: 8 }}
      />

      <Button
        fullWidth
        text={'Radius'}
        textColor={'#009688'}
        type="outlined"
        style={{ marginBottom: 8 }}
        radius={40}
      />
      <Button
        fullWidth
        text={'Icon'}
        textColor={'#E91E63'}
        type="outlined"
        style={{ marginBottom: 8 }}
        icon={<Icon name="favorite" />}
      />
      <Button
        fullWidth
        textColor={'#FF5722'}
        type="outlined"
        loading
        style={{ marginBottom: 8 }}
      />
      <Button
        fullWidth
        text={'Disabled'}
        textColor={'#673AB7'}
        type="outlined"
        style={{ marginBottom: 8 }}
        disabled
      />
    </Container>
  ));
