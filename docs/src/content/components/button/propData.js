import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'borderSize',
    'Size of border for outlined buttons',
    'number',
    'StyleSheet.hairlineWidth',
  ],
  [
    'color',
    'Background color for each buttontype',
    'string',
    'theme.primary.main',
  ],
  ['containerStyle', 'Styles container of contained button', 'object', ''],

  ['dense', 'Toggle dense type, button will be smaller', 'bool', ''],
  ['disabled', 'Toggle disabled styles', 'bool', ''],
  ['fullWidth', 'Forces button to to take up 100% width', 'bool', ''],
  [
    'hideLabel',
    'Will hide label, useful with loading to show only loader',
    'bool',
    '',
  ],
  [
    'icon',
    'Icon element, will be displayed according to iconPosition',
    'node',
    '',
  ],
  ['iconPosition', 'Postion of icon in button', 'string: left, right', 'left'],
  ['loading', 'Toggles loading indicator in button', 'bool', ''],
  ['onPress', 'Callback on button', 'func', ''],
  [
    'radius',
    'Border radius for both ripple and component',
    'number',
    'theme.button.borderRadius',
  ],
  [
    'rippleColor',
    'Overrides default logic for ripple coloring',
    'string',
    'varies',
  ],
  ['style', 'Styles root element', 'object', ''],
  ['text', 'Button Text', 'string', ''],
  [
    'textColor',
    'Color applied to text, styles border if type is outlined',
    'string',
    'theme.primary.main',
  ],
  ['textStyle', 'Styles applied to text', 'object', ''],

  [
    'type',
    'Indicates the type of button from available',
    'string: flat, text, outlined, contained',
    'text',
  ],
];

export default createTableData(propData);
