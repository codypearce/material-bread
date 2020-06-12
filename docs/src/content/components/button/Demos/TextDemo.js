import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    <Button text={'Text'} />
    <Button text={'Icon'} textColor={'#E91E63'} borderSize={2} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} textColor={'#FF5722'} radius={20}  />
    <Button text={'Dense'} ttextColor={'#673AB7'} dense  />
    <Button text={'Loading'} textColor={'#009688'} loading  />
    <Button text={'Disabled'} disabled />
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Text'}
    sectionHref={`${pageHref}#text`}
    sectionId={'text'}
    code={code}
    scope={{ View, Button, Icon }}
  />
);
export default IconDemo;
