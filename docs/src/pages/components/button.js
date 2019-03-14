import React, { Component } from 'react';
import { View, Text } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { IconButton, Icon, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'contained', sub: true },
  { name: 'flat', sub: true },
  { name: 'outlined', sub: true },
  { name: 'text', sub: true },
  { name: 'icons', sub: true },
  { name: 'fullwidth', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'borderSize',
    'Size of border for outlined buttons',
    'number',
    'StyleSheet.hairlineWidth',
  ),
  createPropData(
    'color',
    'Background color for each buttontype',
    'string',
    'theme.base.primary',
  ),
  createPropData(
    'containerStyle',
    'Styles container of contained button',
    'object',
    '',
  ),

  createPropData(
    'dense',
    'Toggle dense type, button will be smaller',
    'bool',
    '',
  ),
  createPropData('disabled', 'Toggle disabled styles', 'bool', ''),
  createPropData(
    'fullWidth',
    'Forces button to to take up 100% width',
    'bool',
    '',
  ),
  createPropData(
    'hideLabel',
    'Will hide label, useful with loading to show only loader',
    'bool',
    '',
  ),
  createPropData(
    'icon',
    'Icon element, will be displayed according to iconPosition',
    'node',
    '',
  ),
  createPropData(
    'iconPosition',
    'Postion of icon in button',
    'string: left, right',
    'left',
  ),
  createPropData('loading', 'Toggles loading indicator in button', 'bool', ''),
  createPropData('onPress', 'Callback on button', 'func', ''),
  createPropData(
    'radius',
    'Border radius for both ripple and component',
    'number',
    'theme.button.borderRadius',
  ),
  createPropData(
    'rippleColor',
    'Overrides default logic for ripple coloring',
    'string',
    'varies',
  ),
  createPropData('style', 'Styles badge element', 'object', ''),
  createPropData('text', 'Button Text', 'string', ''),
  createPropData(
    'textColor',
    'Color applied to text, styles border if type is outlined',
    'string',
    'theme.base.primary',
  ),
  createPropData('textStyle', 'Styles applied to text', 'object', ''),

  createPropData(
    'type',
    'Indicates the type of button from available',
    'string: flat, text, outlined, contained',
    'text',
  ),
];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'contained'} type="contained" />
    <Button text={'flat'} type="flat" color={'#E91E63'} />
    <Button text={'outlined'} type="outlined" textColor={'#009688'} />
    <Button text={'text'} type="text" textColor={'#F44336'} />
    <Button text={'Archive'} type="outlined" textColor={'#673AB7'}  icon={<Icon name="archive" />} />
    <Button text={'Loading'} type="flat" loading color={'#00BCD4'} />
    
</View>`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'material-bread';

export default class Actions extends Component {
  render() {
    return (
        <View >
            <Button text="Cancel" type={'text'}  onPress={() => console('onCancel')}  />
            <Button text="Accept" type={'contained'} onPress={() => console('onAccept')} />
        </Badge>
    );
  }
}`;

const contained = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'contained'} type="contained" />
    <Button text={'Icon'} type="contained" color={'#E91E63'} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} type="contained" color={'#FF5722'} radius={20} />
    <Button text={'Dense'} type="contained" color={'#673AB7'} dense />
    <Button text={'Loading'} type="contained" color={'#009688'} loading />
    <Button text={'Disabled'} type="contained" disabled />
</View>
`;

const flat = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'Flat'} type="flat" />
    <Button text={'Icon'} type="flat" color={'#E91E63'} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} type="flat" color={'#FF5722'} radius={20} />
    <Button text={'Dense'} type="flat" color={'#673AB7'} dense />
    <Button text={'Loading'} type="flat" color={'#009688'} loading />
    <Button text={'Disabled'} type="flat" disabled />
</View>`;

const outlined = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'Outlined'} type="outlined" />
    <Button text={'Icon'} type="outlined" textColor={'#E91E63'} borderSize={2} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} type="outlined" textColor={'#FF5722'} radius={20}  />
    <Button text={'Dense'} type="outlined" textColor={'#673AB7'} dense />
    <Button text={'Loading'} type="outlined" textColor={'#009688'} loading />
    <Button text={'Disabled'} type="outlined" disabled  />
</View>`;

const textButton = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'Text'} />
    <Button text={'Icon'} textColor={'#E91E63'} borderSize={2} icon={<Icon name="favorite" />} />
    <Button text={'Radius'} textColor={'#FF5722'} radius={20}  />
    <Button text={'Dense'} ttextColor={'#673AB7'} dense  />
    <Button text={'Loading'} textColor={'#009688'} loading  />
    <Button text={'Disabled'} disabled />
</View>`;

const icons = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button text={'Save'} type="contained" color={'#2196F3'} icon={<Icon name="save" />} radius={20} />
    <Button text={'Delete'} type="flat" icon={<Icon name="delete" />} color={'#F44336'} />
    <Button text={'Archive'} type="outlined" textColor={'#673AB7'}  icon={<Icon name="archive" />} />
    <Button text={'Add'} textColor={'#009688'} icon={<Icon name="add" />}  />
    <Button text={'Notify'} type="outlined" textColor={'#E91E63'}  icon={<Icon name="notifications" />} iconPosition="right" borderSize={2}/>
    <Button text={'Fav'}  type="flat" icon={<Icon name="favorite" />}  color={'#00BCD4'} iconPosition="right" dense/>
</View>`;

const fullwidth = `<View style={{flexDirection: 'column', alignItems: 'space-between'}}>
    <Button fullWidth text={'Contained'} type="contained"  containerStyle={{marginBottom: 8}} />
    <Button fullWidth text={'Flat'} type="flat" color={'#E91E63'} style={{marginBottom: 8}} />
    <Button fullWidth text={'Outlined'} type="outlined" textColor={'#673AB7'} style={{marginBottom: 8}} />
    <Button fullWidth text={'Text'} textColor={'#009688'}  style={{marginBottom: 8}}/>
</View>`;

const custom = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
    <Button
      style={{height: 100, width: 100, flexDirection: "column", marginRight: 24}}
      type={'outlined'}
      borderSize={4}
      radius={10}
    >
      <Icon name="cloud-upload" size={34} />
      <Text style={{fontWeight: '600', textAlign: 'center'}}>Upload files</Text>
    </Button>
</View>`;

export default class ButtonPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'button'}
          title={'Button'}
          description={
            'Buttons allow users to take actions, and make choices, with a single tap.'
          }
          componentDescription={
            'There are a few types of buttons: contained, outlined, and text. They can have text, icon, both, or you can replace them all with children. Each has a couple of normal, states, hover, active, disabled, and loading. See demos for more variations.'
          }
          docsLink={'https://material.io/design/components/buttons.html'}
          importCode={`import { Button } from 'material-bread';`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ IconButton, Icon, View, Button }}
          usageCode={usageCode}
          propData={propData}
          propsDescription={
            'You can add any of the TouchableProps or Ripple Props to the root component and they will be spread onto the Ripple component, please see the Ripple page to see full list of props.'
          }>
          <Section
            name="Demos"
            href="/components/appbar-bottom#demos"
            id="demos"
          />

          <Section
            name="Contained"
            href="/components/appbar-bottom#contained"
            id="contained">
            <ComponentDescription text="Contained buttons are raised buttons and raise higher when pressed. Because of the shadow, you need to use containerStyle to style the root component to add spacing. The style prop will still style the inner Ripple component." />
            <LiveEdit code={contained} scope={{ Button, View, Icon }} />
          </Section>
          <Section name="Flat" href="/components/appbar-bottom#flat" id="flat">
            <ComponentDescription text="Flat buttons are normal buttons without a shadow." />
            <LiveEdit code={flat} scope={{ Button, View, Icon }} />
          </Section>
          <Section
            name="Outlined"
            href="/components/appbar-bottom#outlined"
            id="outlined">
            <ComponentDescription text="Outlined buttons are similiar to Text Buttons but with a border. The border color will match the text color, changing the textColor will change both. Change the background color by using color prop. The default border width is StyleSheet.hairlineWidth, but you can customize this with the borderSize prop." />
            <LiveEdit code={outlined} scope={{ Button, View, Icon }} />
          </Section>
          <Section name="Text" href="/components/appbar-bottom#text" id="text">
            <ComponentDescription text="" />
            <LiveEdit code={textButton} scope={{ Button, View, Icon }} />
          </Section>
          <Section
            name="Icons"
            href="/components/appbar-bottom#icons"
            id="icons">
            <ComponentDescription text="Icons can appear on the left or right. Icons match the color of the text provided. Icons hide when loading." />
            <LiveEdit code={icons} scope={{ Button, Icon, View }} />
          </Section>
          <Section
            name="Full Width Buttons"
            href="/components/appbar-bottom#full-width"
            id="full-width">
            <ComponentDescription text="Adding full width will force the component to take up available space." />
            <LiveEdit code={fullwidth} scope={{ Button, Icon, View }} />
          </Section>
          <Section
            name="Custom"
            href="/components/appbar-bottom#custom"
            id="custom">
            <ComponentDescription text="Adding children will replace the text node, but not icon or loader. This allows for a more customization." />
            <LiveEdit code={custom} scope={{ Button, Icon, View, Text }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
