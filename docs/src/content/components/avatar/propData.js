import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'actionItems',
    'Each can be an object or node, renders on the right',
    'array',
    '',
  ],
  ['appbarStyles', 'Styles appbar around content', 'object', ''],
  [
    'color',
    `Component's theme color`,
    'string: primary, secondary, dark, white',
    'primaryColor',
  ],
  ['fab', `Displays fab or not`, 'bool', 'false'],
  ['fabCutout', `Displays cutout on appbar for fab`, 'bool', 'false'],
  ['fabIcon', `Name of Fab Icon`, 'string', ''],
  ['fabPosition', `Describes position of fab`, 'string: center, end', 'center'],
  ['fabStyles', `Styles applied to fab`, 'object', ''],
  ['onFab', 'OnPress for fab if provided.', 'func', ''],
  [
    'onNavigation',
    'OnPress for navigationType IconButton if provided.',
    'func',
    '',
  ],
  [
    'navigationIcon',
    'Replaces navigationTyp element and renders on the far left before Title',
    'node',
    '',
  ],
  [
    'navigationType',
    'Name of IconButton, renders on the far left before Title.',
    'string',
    '',
  ],
  ['style', 'Styles root element wrapping fab and appbar', 'object', ''],
];

export default createTableData(propData);
