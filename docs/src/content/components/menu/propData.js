import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'button',
    'Component that will both activate menu and menu will attach to',
    'node',
    '',
  ],
  ['menuStyle', 'Styles the container to menu', 'object', ''],
  ['onHidden', 'Callback when menu is hidden', 'func', ''],
  ['onBackdropPress', 'Callback when clicking outside menu', 'func', ''],
  [
    'sameWidth',
    'Forces menu to match the width of the passed in button',
    'bool',
    'false',
  ],
  ['style', 'Styles root element', 'object', ''],
  ['visible', 'Whether the menu displays', 'bool', ''],
];

export default createTableData(propData);
