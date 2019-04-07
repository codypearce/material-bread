import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
    <Button text={'Save'} type="contained" color={'#2196F3'} icon={<Icon name="save" />} radius={20} />
    <Button text={'Delete'} type="flat" icon={<Icon name="delete" />} color={'#F44336'} />
    <Button text={'Archive'} type="outlined" textColor={'#673AB7'}  icon={<Icon name="archive" />} />
    <Button text={'Add'} textColor={'#009688'} icon={<Icon name="add" />}  />
    <Button text={'Notify'} type="outlined" textColor={'#E91E63'}  icon={<Icon name="notifications" />} iconPosition="right" borderSize={2}/>
    <Button text={'Fav'}  type="flat" icon={<Icon name="favorite" />}  color={'#00BCD4'} iconPosition="right" dense/>
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icons'}
    sectionHref={`${pageHref}#icons`}
    sectionId={'icons'}
    code={code}
    scope={{ View, Button, Icon }}
    description={
      'Icons can appear on the left or right. Icons match the color of the text provided. Icons hide when loading.'
    }
  />
);
export default IconDemo;
