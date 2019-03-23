import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['active', 'Manually control active state', 'bool', ''],
  ['color', 'Color for icon', 'string', ''],
  ['icon', 'Name for icon component', 'string', ''],
  ['onPress', 'Callback for root component', 'func', ''],
  ['size', 'Size of icon', 'number', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
