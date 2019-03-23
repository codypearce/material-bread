import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['changePage', 'Call back when clicking navigation', 'func', ''],
  ['numberOfPages', 'Total number of pages', 'number', ''],
  ['page', 'Current page', 'number', ''],
  ['perPage', 'Number to display perPage', 'number', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
