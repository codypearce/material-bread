import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['align', 'Applies text-align to component', 'string', 'start'],
  ['color', 'Text color', 'string', ''],
  ['gutterBottom', 'Adds marginBottom 10 to create space', 'bool', 'false'],

  ['style', 'Styles root element', 'object', ''],
  ['text', 'Renders a Text string', 'string', ''],
];

export default createTableData(propData);
