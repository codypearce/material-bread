import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['chipStyle', 'Style of chip', 'string: outlined, flat', 'flat'],
  ['color', 'Color of chip background and outline', 'string', ''],
  ['disabled', 'Adds disabled styles and prevents clicking', 'bool', ''],
  ['leftIcon', 'Displays component on the left of the content', 'node', ''],
  [
    'onDelete',
    'Callback func for delete icon, adding this will add delete icon',
    'func',
    '',
  ],
  ['onPress', 'Callback func for chip, adds ripple', 'func', ''],
  ['radius', 'Radius of chip and ripple', 'number', '16'],
  ['rightIcon', 'Displays component on the right of the content', 'node', ''],
  ['style', 'Styles root component', 'string', ''],
  ['text', 'Text content for chip', 'string', ''],
  ['textStyles', 'Styles text content', 'string', ''],
  ['themeColor', 'Assigns a theme color to chip', 'string', ''],
  ['visible', 'Toggle whether chip is shown or not', 'bool', ''],
];

export default createTableData(propData);
