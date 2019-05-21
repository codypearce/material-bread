import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Button, Icon } from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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
      <div>
        The <CodeInline code="Button" type="element" /> component has four
        variations: <CodeInline code="contained" type="value" />,{' '}
        <CodeInline code="outlined" type="value" />,
        <CodeInline code="flat" type="value" /> and,{' '}
        <CodeInline code="text" type="value" />. Each can have text, icons, or
        have their children completely replaced. See demos for more variations.
      </div>
    }
    code={code}
    scope={{ View, Button, Icon }}
  />
);
export default MainDemo;
