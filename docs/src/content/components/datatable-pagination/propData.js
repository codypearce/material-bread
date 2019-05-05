import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'numberOfPages',
    'Total number of pages, usually data.length / perPage',
    'number',
    '',
  ],
  ['numberOfRows', 'Number of rows/items, data.length', 'number', ''],
  ['onChangePage', 'Callback when clicking navigation', 'func', ''],
  [
    'onChangeRowsPerPage',
    'Callback when clicking the perPage Menu',
    'func',
    '',
  ],
  ['page', 'Current page, starts at 0', 'number', ''],
  ['perPage', 'Number of rows  to display per page', 'number', ''],
  ['possibleNumberPerPage', 'Array of possible perPage filtering', 'array', ''],

  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
