import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'actionItems',
    'Each can be an object or node, renders on the right',
    'array',
    '',
  ],
  ['appbarStyles', 'Styles appbar around content', 'object', ''],
  ['color', `Component's background color`, 'string', 'primary'],
  [
    'fab',
    `Renders an arbitrary Fab node where the position is indicated`,
    'node',
    '',
  ],
  ['fabCutout', `Displays cutout on appbar for fab`, 'bool', 'false'],
  ['fabPosition', `Describes position of fab`, 'string: center, end', 'center'],
  [
    'onNavigation',
    'OnPress for navigation IconButton if provided.',
    'func',
    '',
  ],
  [
    'navigation',
    'Name of IconButton if string or node, renders on the far left before Title',
    'node || string',
    '',
  ],

  ['style', 'Styles root element wrapping fab and appbar', 'object', ''],
];

export default createTableData(propData);
