import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'checkboxOffset',
    'Offsets rows without checkboxes to align with ones that do',
    'bool',
    '',
  ],
  ['hover', `Will show background on hover`, 'bool', 'false'],

  ['onPressCheckbox', 'Call back on checkbox', 'func', ''],
  [
    'onPress',
    'Call back on whole row, will default to onPressCheckbox if provided',
    'func',
    '',
  ],
  ['selected', `Whether row and checbkox is selected`, 'bool', ''],
  ['showCheckbox', 'Toggle checkbox display', 'bool', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
