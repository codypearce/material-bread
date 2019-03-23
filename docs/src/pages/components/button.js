import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { IconButton, Icon, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeInline from '../../components/CodeInline';
import Link from '../../components/Link';
import propData from '../../content/components/button/propData';

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

const fullwidth = `<View style={{flexDirection: 'column'}}>
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
            'There are a few types of buttons: contained, outlined, and text. Each can have text, icons, or have their children completely replaced. See demos for more variations.'
          }
          docsLink={'https://material.io/design/components/buttons.html'}
          importCode={`import { Button } from 'material-bread';`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ IconButton, Icon, View, Button }}
          usageCode={usageCode}
          propData={propData}
          propsDescription={
            <div>
              You can add any of the{' '}
              <CodeInline code="TouchableProps" type="prop" /> or{' '}
              <CodeInline code="Ripple" type="prop" /> props to the root
              component and they will be spread onto the{' '}
              <CodeInline code="Ripple" type="element" /> component, please see
              the <Link href="/component/ripple">Ripple</Link> page to see full
              list of props.
            </div>
          }>
          <Section name="Demos" href="/components/button#demos" id="demos" />

          <Section
            name="Contained"
            href="/components/button#contained"
            id="contained">
            <ComponentDescription
              text={
                <div>
                  Contained buttons are raised buttons and raise higher when
                  pressed. Because of the shadow, you need to use{' '}
                  <CodeInline code="containerStyle" type="prop" />
                  to style the root component to add spacing. The style prop
                  will still style the inner{' '}
                  <CodeInline code="Ripple" type="element" /> component.
                </div>
              }
            />
            <LiveEdit code={contained} scope={{ Button, View, Icon }} />
          </Section>
          <Section name="Flat" href="/components/button#flat" id="flat">
            <ComponentDescription text="Flat buttons are normal buttons without a shadow." />
            <LiveEdit code={flat} scope={{ Button, View, Icon }} />
          </Section>
          <Section
            name="Outlined"
            href="/components/button#outlined"
            id="outlined">
            <ComponentDescription
              text={
                <div>
                  Outlined buttons are similiar to Text Buttons but with a
                  border. The border color will match the text color. Changing
                  the <CodeInline code="textColor" type="prop" /> will change
                  both. Change the{' '}
                  <CodeInline code="backgroundColor" type="prop" /> by using
                  color prop. The default border width is
                  <CodeInline code="StyleSheet.hairlineWidth" type="value" />,
                  but you can customize this with the{' '}
                  <CodeInline code="borderSize" type="prop" /> prop.
                </div>
              }
            />
            <LiveEdit code={outlined} scope={{ Button, View, Icon }} />
          </Section>
          <Section name="Text" href="/components/button#text" id="text">
            <ComponentDescription text="" />
            <LiveEdit code={textButton} scope={{ Button, View, Icon }} />
          </Section>
          <Section name="Icons" href="/components/button#icons" id="icons">
            <ComponentDescription text="Icons can appear on the left or right. Icons match the color of the text provided. Icons hide when loading." />
            <LiveEdit code={icons} scope={{ Button, Icon, View }} />
          </Section>
          <Section
            name="Full Width Buttons"
            href="/components/button#full-width"
            id="full-width">
            <ComponentDescription
              text={
                <div>
                  Adding <CodeInline code="fullWidth" type="prop" /> will force
                  the component to take up available space.
                </div>
              }
            />
            <LiveEdit code={fullwidth} scope={{ Button, Icon, View }} />
          </Section>
          <Section name="Custom" href="/components/button#custom" id="custom">
            <ComponentDescription
              text={
                <div>
                  Adding children will replace the text node, but not icon or
                  loader. This allows for a more customization.
                </div>
              }
            />
            <LiveEdit code={custom} scope={{ Button, Icon, View, Text }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
