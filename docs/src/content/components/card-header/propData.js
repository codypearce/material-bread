import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['action', 'Displays action at the top right of the section', 'node', ''],
  ['subtitle', 'Renders subtitle below the title', 'string', ''],
  ['subtitleStyles', 'Styles for subtitle', 'object', ''],

  ['thumbnail', 'Renders arbitrary thumbnail on left of text', 'node', ''],
  ['title', 'Renders title', 'string', ''],
  ['titleStyles', 'Styles for title', 'object', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
