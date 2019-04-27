import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { Button, Icon } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

export default storiesOf('Components|Buttons', module)
  .addParameters({ jest: ['Button'] })

  .add('custom', () => (
    <Container>
      <Header title={'Custom Button'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Button
          style={{
            height: 100,
            width: 100,
            flexDirection: 'column',
            marginRight: 24,
          }}
          type={'outlined'}
          borderSize={4}
          radius={10}>
          <Icon name="cloud-upload" size={34} />
          <Text style={{ fontWeight: '600', textAlign: 'center' }}>
            Upload files
          </Text>
        </Button>
      </View>
    </Container>
  ));
