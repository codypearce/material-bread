import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Duration of entering and leaving animation',
    'number',
    '',
  ],
  ['buttonLabel', 'Label for snackbar button', 'string', ''],
  ['onButtonPress', 'Call back on snackbar button if provided', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['visible', 'Whether snackbar is visible', 'bool', 'false'],
];

export default createTableData(propData);
