import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
  <Button text={'contained'} type="contained" />
  <Button text={'Icon'} type="contained" color={'#E91E63'} icon={<Icon name="favorite" />} />
  <Button text={'Radius'} type="contained" color={'#FF5722'} radius={20} />
  <Button text={'Dense'} type="contained" color={'#673AB7'} dense />
  <Button text={'Loading'} type="contained" color={'#009688'} loading />
  <Button text={'Disabled'} type="contained" disabled />
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Contained'}
    sectionHref={`${pageHref}#contained`}
    sectionId={'contained'}
    code={code}
    scope={{ View, Button, Icon }}
    description={
      <div>
        Contained buttons are raised buttons and raise higher when pressed.
        Because of the shadow, you need to use{' '}
        <CodeInline code="containerStyle" type="prop" />
        to style the root component to add spacing. The style prop will still
        style the inner <CodeInline code="Ripple" type="element" /> component.
      </div>
    }
  />
);
export default IconDemo;
