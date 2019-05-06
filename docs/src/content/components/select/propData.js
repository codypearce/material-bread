import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'buttonStyle',
    'Styles for wrapping container around the input',
    'object',
    '',
  ],
  ['label', 'Label for textinput', 'string', ''],

  ['menuItems', 'Items to display in menu dropdown', 'array', ''],
  ['menuProps', 'Pass any props down to the Menu', 'object', ''],
  ['onSelect', 'Callback when selecting new menu item', 'func', ''],
  ['selectedItem', 'Item currently selected', 'string', ''],
  ['style', 'Styles root element', 'object', ''],
  [
    'textFieldProps',
    'Pass any textFieldProps down the TextField',
    'object',
    '',
  ],
  [
    'type',
    'Chooses the style of select, outlined, flat, filled ',
    'string',
    'flat',
  ],
  ['visible', 'Whether menu is visible', 'bool', ''],
];

export default createTableData(propData);
