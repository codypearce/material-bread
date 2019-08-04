import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of objects displaying tab items', 'array', ''],

  ['backgroundColor', 'Background Color for root component', 'string', 'white'],

  ['handleChange', 'fires when a BottomNavigationItem is clicked', 'func', ''],

  [
    'horizontalWhenLandscape',
    'When in landscape mode, layout items horizontally',
    'bool',
    'false',
  ],

  [
    'showLabels',
    'Sets showLabel true for each BottomNavigationItem',
    'bool',
    'true',
  ],

  ['style', 'Styles root element', 'object', ''],

  ['value', 'Index of currently active Item', 'number', ''],
];

export default createTableData(propData);
