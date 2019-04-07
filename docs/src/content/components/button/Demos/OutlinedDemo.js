import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
    <Button text={'Outlined'} type="outlined" />
    <Button text={'Icon'} type="outlined" textColor={'#E91E63'} borderSize={2} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} type="outlined" textColor={'#FF5722'} radius={20}  />
    <Button text={'Dense'} type="outlined" textColor={'#673AB7'} dense />
    <Button text={'Loading'} type="outlined" textColor={'#009688'} loading />
    <Button text={'Disabled'} type="outlined" disabled  />
</View>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Outlined'}
    sectionHref={`${pageHref}#outlined`}
    sectionId={'outlined'}
    code={code}
    scope={{ View, Button, Icon }}
    description={
      <div>
        Outlined buttons are similiar to Text Buttons but with a border. The
        border color will match the text color. Changing the{' '}
        <CodeInline code="textColor" type="prop" /> will change both. Change the{' '}
        <CodeInline code="backgroundColor" type="prop" /> by using color prop.
        The default border width is
        <CodeInline code="StyleSheet.hairlineWidth" type="value" />, but you can
        customize this with the <CodeInline code="borderSize" type="prop" />{' '}
        prop.
      </div>
    }
  />
);
export default IconDemo;
