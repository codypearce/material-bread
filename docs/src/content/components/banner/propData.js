import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of objects for displaying actions', 'array', ''],
  ['media', 'Displays arbitrary component to the left of the text', 'node', ''],
  ['message', 'Displays banner message', 'string', ''],

  ['mobileLayout', 'Display mobile layout on desktop', 'bool', ''],

  [
    'position',
    'Position on root',
    'string: relative, fixed, absolute',
    'relative',
  ],
  ['singleLine', 'Display banner on one line', 'bool', ''],
  ['visible', 'Whether the banner is visible', 'bool', ''],

  ['style', 'Styles root banner element', 'object', ''],
];

export default createTableData(propData);
