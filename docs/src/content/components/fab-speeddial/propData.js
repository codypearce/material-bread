import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'Actions',
    'Array of actions or other nodes to display when fab is activated',
    'array',
    '',
  ],

  [
    'fab',
    'String adds the name of the icon, node should be full fab',
    'string || node',
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
