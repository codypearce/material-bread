import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['dialogStyle', 'Styles container dialog', 'object', ''],

  ['onRequestClose', 'Callback when dialog is closing', 'func', ''],
  ['onShow', 'Callback when dialog is opening', 'func', ''],
  [
    'onTouchOutside',
    'Callback when clicking outside of dialog when shown',
    'func',
    '',
  ],

  ['visible', 'Wether to show dialog or not', 'bool', ''],
];

export default createTableData(propData);
