import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['active', 'Manually control active state', 'bool', ''],
  ['activeNode', 'Component to show when active', 'node', ''],
  ['color', 'Color for icon', 'string', ''],
  ['icon', 'Name for icon component', 'string', ''],
  ['inActiveNode', 'Component to show when inactive', 'node', ''],
  ['rippleColor', 'Manual control of ripple color', 'string', ''],
  [
    'rippleContainerBorderRadius',
    'Manual control of ripple borderRadius',
    'number',
    '100',
  ],

  ['onPress', 'Callback for root component', 'func', ''],
  ['size', 'Size of icon', 'number', ''],
  ['style', 'Styles root element', 'object', ''],
  ['value', 'Value for toggle button, used in ToggleButtonGroup', 'string', ''],
];

export default createTableData(propData);
