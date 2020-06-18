import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Duration of entering and leaving animation',
    'number',
    '',
  ],
  ['action', 'The action after the message, at the end of the snackbar', 'node', ''],
  ['style', 'Styles root element', 'object', ''],
  ['visible', 'Whether snackbar is visible', 'bool', 'false'],
];

export default createTableData(propData);
