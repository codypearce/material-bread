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

  ['color', `Component's background color`, 'string', 'primary'],
  ['elevation', `Shadow on container appbar`, 'number', '8'],
  [
    'onNavigation',
    'OnPress for navigation IconButton if provided.',
    'func',
    '',
  ],
  ['onTitle', 'OnPress for title string if provided.', 'func', ''],
  [
    'navigation',
    'Renders IconButton if string, or renders custom node on left of title',
    'node || string',
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
