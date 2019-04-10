import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import { Button, Icon } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Buttons', module)
  .add('Text Button', () => (
    <Container>
      <Header title={'Text Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Button text={'Text'} />
        <Button
          text={'Icon'}
          textColor={'#E91E63'}
          borderSize={2}
          icon={<Icon name="favorite" />}
        />
        <Button text={'Radius'} textColor={'#FF5722'} radius={20} />
        <Button text={'Dense'} ttextColor={'#673AB7'} dense />
        <Button text={'Loading'} textColor={'#009688'} loading />
        <Button text={'Disabled'} disabled />
      </View>
      <Button
        fullWidth
        text={'Text'}
        textColor={'#009688'}
        style={{ marginBottom: 8 }}
      />
    </Container>
  ))
  .add('Flat Button', () => (
    <Container>
      <Header title={'Flat Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Button text={'Flat'} type="flat" />
        <Button
          text={'Icon'}
          type="flat"
          color={'#E91E63'}
          icon={<Icon name="favorite" />}
        />
        <Button text={'Radius'} type="flat" color={'#FF5722'} radius={20} />
        <Button text={'Dense'} type="flat" color={'#673AB7'} dense />
        <Button text={'Loading'} type="flat" color={'#009688'} loading />
        <Button text={'Disabled'} type="flat" disabled />
      </View>
      <Button
        fullWidth
        text={'Flat'}
        type="flat"
        color={'#E91E63'}
        style={{ marginBottom: 8 }}
      />
    </Container>
  ))
  .add('Outlined Button', () => (
    <Container>
      <Header title={'Outlined Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Button text={'Outlined'} type="outlined" />
        <Button
          text={'Icon'}
          type="outlined"
          textColor={'#E91E63'}
          borderSize={2}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Radius'}
          type="outlined"
          textColor={'#FF5722'}
          radius={20}
        />
        <Button text={'Dense'} type="outlined" textColor={'#673AB7'} dense />
        <Button
          text={'Loading'}
          type="outlined"
          textColor={'#009688'}
          loading
        />
        <Button text={'Disabled'} type="outlined" disabled />
      </View>
      <Button
        fullWidth
        text={'Outlined'}
        type="outlined"
        textColor={'#673AB7'}
        style={{ marginBottom: 8 }}
      />
    </Container>
  ))
  .add('Contained Button', () => (
    <Container>
      <Header title={'Contained Button'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Button text={'contained'} type="contained" />
        <Button
          text={'Icon'}
          type="contained"
          color={'#E91E63'}
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Radius'}
          type="contained"
          color={'#FF5722'}
          radius={20}
        />
        <Button text={'Dense'} type="contained" color={'#673AB7'} dense />
        <Button text={'Loading'} type="contained" color={'#009688'} loading />
        <Button text={'Disabled'} type="contained" disabled />
      </View>
      <Button
        fullWidth
        text={'Contained'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
      />
    </Container>
  ));
