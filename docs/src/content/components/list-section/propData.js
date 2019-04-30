import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['bottomDivider', 'Adds a divider on the bottom of the section', 'bool', ''],
  ['contentStyle', 'Styles element wrapping the content', 'object', ''],
  ['inset', 'Insets the divider', 'bool', ''],
  ['label', 'Text as a section header', 'string', ''],
  ['style', 'Styles root element', 'object', ''],
  ['topDivider', 'Adds a divider on the top of the section', 'bool', ''],
];

export default createTableData(propData);
