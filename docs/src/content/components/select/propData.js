import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['buttonStyle', 'Styles for button', 'object', ''],
  ['label', 'Text for button', 'string', ''],
  ['menuItems', 'Items to display in dropdown', 'array', ''],
  ['onSelect', 'Callback when selecting new menu item', 'func', ''],
  ['selectedItem', 'Item currently selected', 'string', ''],
  ['style', 'Styles root element', 'object', ''],
  ['visible', 'Whether menu is visible', 'bool', ''],
];

export default createTableData(propData);
