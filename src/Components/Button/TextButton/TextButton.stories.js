import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

export default storiesOf('Components|Buttons/Text Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Simple', () => (
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
  .add('with icon', () => (
    <Container>
      <Header title={'Text Button'} />

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
          dense
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
  .add('radius', () => (
    <Container>
      <Header title={'Text Button'} />

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
          dense
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
  .add('dense', () => (
    <Container>
      <Header title={'Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} dense />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          dense
          icon={<Icon name="favorite" />}
        />
        <Button text={'Settings'} textColor={'#FF5722'} dense radius={60} />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          dense
          radius={0}
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          dense
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Text Button'} />

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
          dense
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
      <Header title={'Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} disabled />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          loading
          disabled
          icon={<Icon name="favorite" />}
        />
        <Button text={'Settings'} textColor={'#FF5722'} disabled radius={60} />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          dense
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
      <Header title={'Text Button'} />
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
        text={'Loading'}
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
