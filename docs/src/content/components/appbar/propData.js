import { createTableData } from '@utils/createPropData';
const propData = [
  [
    'actionItems',
    'Each can be an object or node, renders on the right',
    'array',
    '',
  ],
  [
    'barType',
    `Type of appbar, other components change based on type`,
    'string: regular, prominent, dense, prominent dense',
    'regular',
  ],

  ['backgroundImage', `Renders image element as background`, 'node', ''],

  [
    'color',
    `Component's theme color`,
    'string: primary, secondary, dark, white',
    'primary',
  ],
  [
    'onNavigation',
    'OnPress for navigationType IconButton if provided.',
    'func',
    '',
  ],
  ['onTitle', 'OnPress for title string if provided.', 'func', ''],
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

  [
    'position',
    'CSS position values applied to root appbar',
    'string: fixed, relative, absolute',
    'relative',
  ],
  [
    'subtitle',
    'Only displays on barType prominent, under the Title',
    'string',
    '',
  ],
  ['subtitleStyles', 'Styles Subtitle', 'object', ''],
  [
    'title',
    'Displays on the left after navigation. If string it follows guidelines',
    'string || node',
    '',
  ],
  ['titleStyles', 'Styles title if provided as string', 'object', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
