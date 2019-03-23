import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'Actions',
    'Array of actions or other nodes to display when fab is activated',
    'array',
    '',
  ],

  [
    'onPress',
    'Call back on main fab, this will activate animation as well',
    'func',
    '',
  ],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
