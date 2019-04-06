import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Button, Icon } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
  <Button text={'contained'} type="contained" />
  <Button text={'flat'} type="flat" color={'#E91E63'} />
  <Button text={'outlined'} type="outlined" textColor={'#009688'} />
  <Button text={'text'} type="text" textColor={'#F44336'} />
  <Button text={'Archive'} type="outlined" textColor={'#673AB7'}  icon={<Icon name="archive" />} />
  <Button text={'Loading'} type="flat" loading color={'#00BCD4'} />
</View>`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'There are a few types of buttons: contained, outlined, and text. Each can have text, icons, or have their children completely replaced. See demos for more variations.'
    }
    code={code}
    scope={{ View, Button, Icon }}
  />
);
export default MainDemo;
