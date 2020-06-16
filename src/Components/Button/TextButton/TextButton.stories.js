import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon, BodyText } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

export default storiesOf('Components|Buttons/Text Button', module)
  .addParameters({ jest: ['Button'] })
  .add('simple', () => (
    <Container>
      <Header title={'Simple Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Text'} />
        <Button text={'Button'} textColor={'#E91E63'} />
        <Button text={'Buy'} textColor={'#FF5722'} />
        <Button text={'Click Here'} textColor={'#673AB7'} />
        <Button text={'Do not click'} textColor={'#009688'} />
      </View>
    </Container>
  ))
  .add('with left icon', () => (
    <Container>
      <Header title={'Left Icon Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} icon={<Icon name="home" />} />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          textColor={'#FF5722'}
          radius={20}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('with right icon', () => (
    <Container>
      <Header title={'Right Icon Text Button'} />

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
          iconPosition={'right'}
        />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          icon={<Icon name="favorite" />}
          iconPosition={'right'}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          textColor={'#FF5722'}
          radius={20}
          iconPosition={'right'}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          dense
          icon={<Icon name="attach-money" />}
          iconPosition={'right'}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          icon={<Icon name="archive" />}
          iconPosition={'right'}
        />
      </View>
    </Container>
  ))
  .add('radius', () => (
    <Container>
      <Header title={'Radius Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} radius={20} />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          radius={40}
          icon={<Icon name="favorite" />}
        />
        <Button text={'Settings'} textColor={'#FF5722'} radius={60} />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          radius={0}
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('density', () => (
    <Container>
      <Header title={'Dense Text Button'} />

      <BodyText text={'Density -1: 32px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-1} />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-1}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-1}
          radius={60}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-1}
          radius={0}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-1}
          icon={<Icon name="archive" />}
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
        <Button text={'Home'} density={-2} />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-2}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-2}
          radius={60}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-2}
          icon={<Icon name="archive" />}
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
        <Button text={'Home'} density={-3} />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          density={-3}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          density={-3}
          radius={60}
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-3}
          radius={0}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          density={-3}
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Loading Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} loading />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          loading
          icon={<Icon name="favorite" />}
        />
        <Button text={'Settings'} textColor={'#FF5722'} loading radius={60} />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          loading
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          loading
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Disabled Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} disabled />
        <Button textColor={'#E91E63'} borderSize={2} loading disabled />
        <Button text={'Settings'} textColor={'#FF5722'} disabled radius={60} />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          density={-2}
          radius={0}
          disabled
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          disabled
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('full width', () => (
    <Container>
      <Header title={'Full Width Text Button'} />
      <Button fullWidth text={'Text'} style={{ marginBottom: 8 }} />
      <Button
        fullWidth
        text={'Radius'}
        textColor={'#009688'}
        style={{ marginBottom: 8 }}
        radius={40}
      />
      <Button
        fullWidth
        text={'Icon'}
        icon={<Icon name="favorite" />}
        textColor={'#E91E63'}
        style={{ marginBottom: 8 }}
      />
      <Button
        fullWidth
        textColor={'#FF5722'}
        loading
        style={{ marginBottom: 8 }}
      />
      <Button
        fullWidth
        text={'Disabled'}
        textColor={'#673AB7'}
        disabled
        style={{ marginBottom: 8 }}
      />
    </Container>
  ));
