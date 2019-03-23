import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['checked', `Whether row's chebox is selected`, 'bool', ''],
  ['onPressCheckBox', 'Call back on checkbox', 'func', ''],
  [
    'onPress',
    'Call back on whole row, will default to onPressCheckBox if provided',
    'func',
    '',
  ],
  ['showcheckBox', 'Toggle checkbox display', 'bool', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
