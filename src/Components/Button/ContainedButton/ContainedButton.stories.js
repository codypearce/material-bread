import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

export default storiesOf('Components|Buttons/Contained Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Simple Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Text'} type="contained" />
        <Button text={'Button'} color={'#E91E63'} type="contained" />
        <Button text={'Buy'} color={'#FF5722'} type="contained" />
        <Button text={'Click Here'} color={'#673AB7'} type="contained" />
        <Button text={'Do not click'} color={'#009688'} type="contained" />
      </View>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Flat Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} icon={<Icon name="home" />} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          color={'#FF5722'}
          radius={20}
          type="contained"
        />
        <Button
          text={'Buy'}
          color={'#673AB7'}
          dense
          icon={<Icon name="attach-money" />}
          type="contained"
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('radius', () => (
    <Container>
      <Header title={'Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} radius={20} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          radius={40}
          icon={<Icon name="favorite" />}
          type="contained"
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          dense
          radius={0}
          icon={<Icon name="attach-money" />}
          type="contained"
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          radius={0}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('dense', () => (
    <Container>
      <Header title={'Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} dense type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          dense
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          dense
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          dense
          radius={0}
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          dense
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} loading type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          loading
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          loading
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          dense
          radius={0}
          loading
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          loading
          type="contained"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} disabled type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          loading
          disabled
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          type="contained"
          disabled
          radius={60}
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          dense
          radius={0}
          disabled
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          disabled
          type="contained"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('full width', () => (
    <Container>
      <Header title={'Full Width'} />
      <Button
        fullWidth
        text={'Contained'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
      />

      <Button
        fullWidth
        text={'Radius'}
        color={'#009688'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        radius={40}
      />
      <Button
        fullWidth
        text={'Icon'}
        color={'#E91E63'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        icon={<Icon name="favorite" />}
      />
      <Button
        fullWidth
        text={'Loading'}
        color={'#FF5722'}
        type="contained"
        loading
        containerStyle={{ marginBottom: 8 }}
      />
      <Button
        fullWidth
        text={'Disabled'}
        color={'#673AB7'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        disabled
      />
    </Container>
  ));
