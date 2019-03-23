import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['height', 'Sets height of section and thus the image', 'number', '194'],
  ['image', 'Displays image across the whole card media section', 'node', ''],
  ['subtitle', 'Renders subtitle below the title', 'string', ''],
  ['subtitleStyles', 'Styles for subtitle', 'object', ''],

  ['title', 'Renders title', 'string', ''],
  ['titleStyles', 'Styles for title', 'object', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
