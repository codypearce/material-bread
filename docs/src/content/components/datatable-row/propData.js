import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['hover', `Will show background on hover`, 'bool', 'false'],

  ['onPressCheckBox', 'Call back on checkbox', 'func', ''],
  [
    'onPress',
    'Call back on whole row, will default to onPressCheckBox if provided',
    'func',
    '',
  ],
  ['selected', `Whether row and checbkox is selected`, 'bool', ''],
  ['showCheckbox', 'Toggle checkbox display', 'bool', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
