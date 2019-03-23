import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of objects displaying tab items', 'array', ''],
  ['backgroundColor', 'Background Color for root component', 'string', 'white'],
  ['handleChange', 'fires when a BottomNavigationItem is clicked', 'func', ''],

  [
    'showLabels',
    'Sets showLabel true for each BottomNavigationItem',
    'bool',
    '',
  ],

  ['style', 'Styles root element', 'object', ''],

  ['value', 'Index of currently active Item', 'number', ''],
];

export default createTableData(propData);
