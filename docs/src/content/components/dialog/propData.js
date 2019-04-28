import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of actions to show at the bottom right', 'array', ''],
  [
    'contentStyle',
    'Styles content container excluding action items',
    'object',
    '',
  ],
  ['onRequestClose', 'Callback when dialog is closing', 'func', ''],
  ['onShow', 'Callback when dialog is opening', 'func', ''],
  [
    'onTouchOutside',
    'Callback when clicking outside of dialog when shown',
    'func',
    '',
  ],
  ['title', 'Adds a dialog title at the top', 'string', ''],
  ['style', 'Styles container dialog', 'object', ''],
  ['supportingText', 'Adds styled text below title', 'string', ''],
  ['visible', 'Wether to show dialog or not', 'bool', ''],
];

export default createTableData(propData);
