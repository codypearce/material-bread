import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import {
  Card,
  Ripple,
  CardMedia,
  CardContent,
  CardActions,
} from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{maxWidth: 400, width: '100%'}}>
    <Ripple onPress={() => console.log('pressed action')}>
      <CardMedia
        image={
          <Image
            style={{ flex: 1, width: '100%' }}
            source={{uri: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
            resizeMode="cover"
          />
        }
      />
      <CardContent >
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
          Gorilla
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
          Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.
        </Text>
      </CardContent>
    </Ripple>
    <CardActions
      leftActionItems={[
        {name: 'share',},
        {name: 'learn more'}
      ]}
    />
  </Card>
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Action Media'}
    sectionHref={`${pageHref}#action-media`}
    sectionId={'action-media'}
    code={code}
    scope={{
      View,
      Card,
      Ripple,
      CardMedia,
      CardContent,
      CardActions,
      Image,
      Text,
    }}
    description={
      <div>
        You can wrap any component with a{' '}
        <CodeInline code="Ripple" type="element" /> to make it clickable.
      </div>
    }
  />
);
export default IconDemo;
