import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon } from '../../..';
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
  .add('with icon', () => (
    <Container>
      <Header title={'Outlined Button'} />

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
          dense
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
  .add('radius', () => (
    <Container>
      <Header title={'Outlined Button'} />

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
          dense
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
  .add('dense', () => (
    <Container>
      <Header title={'Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} dense type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          dense
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          dense
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          dense
          radius={0}
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          dense
          icon={<Icon name="archive" />}
          type="outlined"
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} loading type="outlined" />
        <Button
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          loading
          type="outlined"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          textColor={'#FF5722'}
          loading
          radius={60}
          type="outlined"
        />
        <Button
          text={'Buy'}
          ttextColor={'#673AB7'}
          dense
          radius={0}
          loading
          type="outlined"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          textColor={'#009688'}
          loading
          type="outlined"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Outlined Button'} />

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
          text={'Favorite'}
          textColor={'#E91E63'}
          borderSize={2}
          loading
          disabled
          type="outlined"
          icon={<Icon name="favorite" />}
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
          dense
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
      <Header title={'Full Width'} />
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
        text={'Loading'}
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
