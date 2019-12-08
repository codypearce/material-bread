import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'Actions',
    'Array of actions or other nodes to display when fab is activated',
    'array',
    '',
  ],
  [
    'containerStyle',
    'Styles containing element over fab and items',
    'object',
    '',
  ],

  [
    'fab',
    'String adds the name of the icon, node should be full fab',
    'string || node',
    '',
  ],

  ['fabProps', 'props to render on the fab', 'object', ''],

  [
    'onPress',
    'Call back on main fab, this will activate animation as well',
    'func',
    '',
  ],
  ['style', 'Styles fab element', 'object', ''],
];

export default createTableData(propData);
