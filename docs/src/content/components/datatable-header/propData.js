import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['leftActions', 'Displays actions on left of header', 'array', ''],
  ['rightActions', 'Displays actions on right of header', 'array', ''],
  ['style', 'Styles root element', 'object', ''],
  ['title', 'Table title', 'string', ''],
];

export default createTableData(propData);
