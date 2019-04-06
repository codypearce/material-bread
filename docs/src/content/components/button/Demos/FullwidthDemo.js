import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'column'}}>
    <Button fullWidth text={'Contained'} type="contained"  containerStyle={{marginBottom: 8}} />
    <Button fullWidth text={'Flat'} type="flat" color={'#E91E63'} style={{marginBottom: 8}} />
    <Button fullWidth text={'Outlined'} type="outlined" textColor={'#673AB7'} style={{marginBottom: 8}} />
    <Button fullWidth text={'Text'} textColor={'#009688'}  style={{marginBottom: 8}}/>
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Full Width'}
    sectionHref={`${pageHref}#full-width`}
    sectionId={'full-width'}
    code={code}
    scope={{ View, Button, Icon }}
    description={
      <div>
        Adding <CodeInline code="fullWidth" type="prop" /> will force the
        component to take up available space.
      </div>
    }
  />
);
export default IconDemo;
