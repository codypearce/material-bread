import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['color', 'Icon Color', 'string', ''],
  ['name', 'Name of icon that matches material names', 'string', ''],
  ['size', 'Size of icon', 'number', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
