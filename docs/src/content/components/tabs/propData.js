import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of objects displaying tab items', 'array', ''],
  [
    'backgroundColor',
    'Background Color for root component',
    'string',
    'theme.primary.main',
  ],

  [
    'handleChange',
    'fires when a Tab is clicked, handles changing tabs',
    'func',
    '',
  ],
  [
    'scrollEnabled',
    'Toggles whether tabs should be scrollable or squish to fit into width',
    'bool',
    'false',
  ],
  ['selectedIndex', 'Index of currently active Item', 'number', ''],
  ['style', 'Styles root element', 'object', ''],
  ['underlineColor', 'Color for underline', 'string', 'theme.primary.main'],
];

export default createTableData(propData);
