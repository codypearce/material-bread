import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['expanded', 'Manual control of when the menu is open', 'bool', 'false'],
  [
    'icon',
    'Renders an icon on the left, pushes inner content over',
    'node',
    '',
  ],
  ['onPress', 'Callback when clicking ListExpand', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['title', 'The text shown on the expand button, required', 'string', ''],
  ['titleStyle', 'Styles the title text', 'object', ''],
];

export default createTableData(propData);
